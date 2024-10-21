import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { DossierDetailsService } from '../../../../service/dossier-details.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PagemoduleModule } from '../../../../pagemodule/pagemodule.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qus-disagree-dispute',
  standalone: true,
  imports: [TranslateModule, AlertModule, FormsModule, ReactiveFormsModule],
  templateUrl: './qus-disagree-dispute.component.html',
  styleUrl: './qus-disagree-dispute.component.css'
})
export class QusDisagreeDisputeComponent  implements OnInit{
  public questionform: any = FormGroup;

  @Input() client_name: string ="";
  
  constructor(public spinner: NgxSpinnerService, private formBuilder: FormBuilder,  private router: Router,
    public translate: TranslateService, private dossierServ: DossierDetailsService) {

  }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.questionform = this.formBuilder.group({
      qustion1:["",  Validators.required],
      qustion2:["",  Validators.required],
      file: ["",  Validators.required],
      disagrementletter:["",  Validators.required],
      disagrementlettername:["",  Validators.required]
    })
    this.onChanges();
  }

  onChanges(): void {
    this.questionform.get('qustion1').valueChanges.subscribe((val: any) => {
      this.questionform.controls['qustion2'].setValue("");
      this.questionform.controls['file'].setValue("");
      this.questionform.controls['disagrementletter'].setValue("");
      this.questionform.controls['disagrementlettername'].setValue("");
   
      if(val == "No"){
        this.router.navigate(['/dossier-details']);
      }
    });
    this.questionform.get('qustion2').valueChanges.subscribe((val: any) => {
      this.questionform.controls['file'].setValue("");
      this.questionform.controls['disagrementletter'].setValue("");
      this.questionform.controls['disagrementlettername'].setValue("");
    });
  }

  
  uploadfiles(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      
        this.convertFile(file).then((base64: any) => {
          this.questionform.controls['disagrementletter'].setValue(base64);
          this.questionform.controls['disagrementlettername'].setValue(file.name);
        });
      
    }

  }

  public convertFile(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    })
  }

  submit(){
    if (this.questionform.invalid) {
      return
    }

    this.spinner.show();
    this.dossierServ.submitQuestion("dispute",this.questionform.value).subscribe({
      next: (value: any) => {
        this.spinner.hide();
        Swal.fire({
        
          text: this.translate.instant('Thanks for the details. We will review internally and get back to you'),
          icon: "success"
        }).then(()=>{
          this.router.navigate(['/dossier-details']);
        })
        
      }, error: (err) => {
       
        this.spinner.hide();
      }, complete: () => {
        this.spinner.hide();
      },
    });
  }

  back(){
    this.router.navigate(['/dossier-details']);
  }

}
