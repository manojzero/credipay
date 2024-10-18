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
import { ProfileService } from '../../../../service/profile.service';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qus-copy-invoice',
  standalone: true,
  imports: [NgFor, TranslateModule, AlertModule, FormsModule, ReactiveFormsModule, NgMultiSelectDropDownModule, CommonModule],
  templateUrl: './qus-copy-invoice.component.html',
  styleUrl: './qus-copy-invoice.component.css'
})
export class QusCopyInvoiceComponent   implements OnInit {
  public questionform: any = FormGroup;
  @Input() client_name: string ="";
  dossierDetails: any = [];

  email_address: any = "";
  selection = new SelectionModel<any>(true, []);
  constructor(public spinner: NgxSpinnerService, private formBuilder: FormBuilder,  private router: Router,
    public translate: TranslateService, private dossierServ: DossierDetailsService,
    private authService: ProfileService) {

    const navigation = this.router.getCurrentNavigation();

    let state_datas: any = navigation?.extras.state;

    if (state_datas)
      this.client_name = state_datas.client_name;
  }

  ngOnInit(): void {
    this.initform();
    this.getInvoiceList();
    this.getmyprofiledata()

   
  }


  getmyprofiledata() {
    this.authService.getuserdetails().subscribe({
      next: (data: any) => {
        
        console.log("data " + data.result);
        this.email_address = data?.result?.email;
      },
      error: (err: any) => {
        console.log("err " + JSON.stringify(err));
      },
      complete: () => {
        console.log("completed ");
      }

    })
}


toggleSelection(row: any): void  {
  this.selection.toggle(row);

  this.questionform.get('invoicelist').setValue(this.selection.selected)
}

  getInvoiceList() {
    this.spinner.show();

    this.dossierServ.getInvoiceList().subscribe({
      next: (data: any) => {
        console.log("data", data);
       
        this.spinner.hide();
        this.dossierDetails =data;
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
      qustion2:[""],
    })
    this.onChanges();
  }

 

  onChanges(): void {
    this.questionform.get('qustion2').valueChanges.subscribe((val: any) => {
        if(val == "Yes"){
          this.router.navigate(['/my-profile']);
        }else if (val == "No"){
          this.router.navigate(['/dossier-details']);
        }
    }); 

    this.questionform.get('qustion2').valueChanges.subscribe((val: any) => {
       if (val == "No"){
        this.router.navigate(['/dossier-details']);
      }
  }); 
    
  }
  




  submit(){
    if (this.questionform.invalid) {
      return
    }

    this.spinner.show();
    this.dossierServ.submitQuestion("invoice",this.questionform.value).subscribe({
      next: (value: any) => {
        this.spinner.hide();
        Swal.fire({
        
          text: this.translate.instant('Data_submitted_message'),
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

