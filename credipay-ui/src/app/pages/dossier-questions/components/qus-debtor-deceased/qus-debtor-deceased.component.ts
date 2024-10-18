import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { DossierDetailsService } from '../../../../service/dossier-details.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PagemoduleModule } from '../../../../pagemodule/pagemodule.module';

@Component({
  selector: 'app-qus-debtor-deceased',
  standalone: true,
  imports: [TranslateModule, AlertModule, FormsModule, ReactiveFormsModule],
  templateUrl: './qus-debtor-deceased.component.html',
  styleUrl: './qus-debtor-deceased.component.css'
})
export class QusDebtorDeceasedComponent  implements OnInit {
  public questionform: any = FormGroup;
  public client_name: any = "";

  
  constructor(public spinner: NgxSpinnerService, private formBuilder: FormBuilder,  private router: Router,
    public translate: TranslateService) {

    const navigation = this.router.getCurrentNavigation();

    let state_datas: any = navigation?.extras.state;

    if (state_datas)
      this.client_name = state_datas.client_name;
  }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.questionform = this.formBuilder.group({
      qustion1:["",  Validators.required],
      file: ["",  Validators.required],
      deathcertificate:["",  Validators.required],
      deathcertificatename:["",  Validators.required]
    })
    this.onChanges();
  }

  onChanges(): void {
    this.questionform.get('qustion1').valueChanges.subscribe((val: any) => {
      this.questionform.controls['file'].setValue("");
      this.questionform.controls['deathcertificate'].setValue("");
      this.questionform.controls['deathcertificatename'].setValue("");
    });
  
  }
  
  uploadfiles(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      
        this.convertFile(file).then((base64: any) => {
          this.questionform.controls['deathcertificate'].setValue(base64);
          this.questionform.controls['deathcertificatename'].setValue(file.name);
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
  }

  back(){
    this.router.navigate(['/dossier-details']);
  }

}