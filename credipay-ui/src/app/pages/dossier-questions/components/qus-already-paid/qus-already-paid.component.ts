import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { DossierDetailsService } from '../../../../service/dossier-details.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PagemoduleModule } from '../../../../pagemodule/pagemodule.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-qus-already-paid',
  standalone: true,
  imports: [NgFor, TranslateModule, AlertModule, FormsModule, ReactiveFormsModule, NgMultiSelectDropDownModule, CommonModule],
  templateUrl: './qus-already-paid.component.html',
  styleUrl: './qus-already-paid.component.css'
})
export class QusAlreadyPaidComponent  implements OnInit {
  public questionform: any = FormGroup;
  @Input() client_name: string ="";
  
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
      datas: this.formBuilder.array([])
    })
    this.onChanges();
  }

  recordForm(id: any): FormGroup {
    return this.formBuilder.group({
      id: [id, Validators.required],
      date: ["",  Validators.required],
      amount: ["",  Validators.required],
      ibanfrom:["",  Validators.required],
      ibanto:["",  Validators.required]
    });
  }

  onChanges(): void {
    this.questionform.get('qustion1').valueChanges.subscribe((val: any) => {
      let invoce_list = this.questionform.get('invoicelist').value;
      (this.questionform.controls['datas'] as FormArray).clear();
      invoce_list.forEach((ele: any) => {
        this.questionform.get("datas").push(this.recordForm(ele?.invoice_number))
      });
      console.log("this.questionform", this.questionform);
    }); 
    
  }
  
  uploadfiles(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      
        this.convertFile(file).then((base64: any) => {
          this.questionform.controls['deathcertificate'].setValue(base64);
          this.questionform.controls['deathcertificatename'].setValue(file.name);
        })
      
    }
    

  }

  getDataDetails(): any {
    return this.questionform()
      .get('datas') as FormArray;
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
