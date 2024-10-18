import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { DossierDetailsService } from '../../../../service/dossier-details.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PagemoduleModule } from '../../../../pagemodule/pagemodule.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-qus-already-paid',
  standalone: true,
  imports: [TranslateModule, AlertModule, FormsModule, ReactiveFormsModule, NgMultiSelectDropDownModule],
  templateUrl: './qus-already-paid.component.html',
  styleUrl: './qus-already-paid.component.css'
})
export class QusAlreadyPaidComponent  implements OnInit {
  public questionform: any = FormGroup;
  public client_name: any = "";
  dropdownList: any = [];
  dropdownSettings: any = {};
  constructor(public spinner: NgxSpinnerService, private formBuilder: FormBuilder,  private router: Router,
    public translate: TranslateService, private dossierServ: DossierDetailsService) {

    const navigation = this.router.getCurrentNavigation();

    let state_datas: any = navigation?.extras.state;

    if (state_datas)
      this.client_name = state_datas.client_name;
  }

  ngOnInit(): void {
    this.initform();
    this.getInvoiceList();
   

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'invoice_number',
      textField: 'invoice_number',
      itemsShowLimit: 1,
      allowSearchFilter: false,
      enableCheckAll: false
    };
  }


  getInvoiceList() {
    this.spinner.show();

    this.dossierServ.getInvoiceList().subscribe({
      next: (data: any) => {
        console.log("data", data);
        this.dropdownList = data;
        this.spinner.hide();
     
      },
      error: (err: any) => {
        this.spinner.hide();

      },
      complete: () => {
        this.spinner.hide();
      },

    })

}

  initform() {
    this.questionform = this.formBuilder.group({
      invoicelist:["",  Validators.required],
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
