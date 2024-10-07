import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModel, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagemoduleModule } from '../../../../pagemodule/pagemodule.module';
import { DossierDetailsService } from '../../../../service/dossier-details.service';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dossier-paymentplan',
  standalone: true,
  imports: [FormsModule, CommonModule, PagemoduleModule, ReactiveFormsModule, AlertModule,TranslateModule],
  templateUrl: './dossier-paymentplan.component.html',
  styleUrl: './dossier-paymentplan.component.css',
  providers: [HttpClient, TranslateService, FormBuilder, AlertConfig]
})
export class DossierPaymentplanComponent {


  dossierDetails: any;
  public paymentForm: any = FormGroup;
  amount: any;
  data: any;
  totalmonths: any;
  remainingamount: any;
  paymentDate: any;
  eligibleforpaymentplan: boolean = false;
  errmessage: string[] = []; open: boolean = true; dismissible: boolean = true;
  timeout: number = 5000;
  minDate: String = '';
  maxDate: String = '';
  datePlaceholder: String = '';
  val: String = '';
  paymentplan: any = false;
  enablepayment: any = false;
  finalsubmit: any = false;
  constructor(public translate: TranslateService, private formBuilder: FormBuilder, private route: ActivatedRoute, private DossierDetailsService: DossierDetailsService,
    public spinner: NgxSpinnerService
  ) {
    translate.setDefaultLang('en');
    if (typeof window !== 'undefined' && window.localStorage) {
      translate.use(localStorage.getItem('lang') || 'en');
    }
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.amount = params['amount']; // Access the route parameter
    });
    this.initForm();
    const today = new Date();
    console.log("today=======", today);
    this.minDate = today.toISOString().slice(0, 10);
    // this.minDate =this.formatDate(new Date());
    console.log("minDate=======", this.minDate);
    const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 31);
    this.maxDate = max.toISOString().slice(0, 10);
    console.log("maxDate=======", this.maxDate);

  }


  initForm() {

    this.paymentForm = this.formBuilder.group({
      id: [0, Validators.required],
      monthly_amount: [''],
      totalmonths: [''],
      remainingamount: [''],
      paymentDate: [null]
    })
    console.log("====", this.paymentForm);
  }

  getpaymentplan() {
    this.spinner.show();
    if (this.paymentForm.invalid) {
      return
    }
    this.DossierDetailsService.getDossierPaymentplan(this.amount, this.paymentForm.value.monthly_amount).subscribe({
      next: (data: any) => {
        this.data = data
        const text = "-months";
        const month = data.months + text;
        console.log("month==========", month);
        this.eligibleforpaymentplan = true;
        //  this.val=this.paymentForm.controls['totalmonths'].setValue(month).value;
        //  console.log("val==========>",this.val);
        this.paymentForm.controls['totalmonths'].setValue(data.months);
        this.paymentForm.controls['remainingamount'].setValue(data.remaining_amount.toFixed(2));
        this.errmessage = []
        this.paymentplan = true
        console.log("this. paymentForm===", this.paymentForm.controls['totalmonths'].value);
      },
      error: (err: any) => {
        // this.addAlert(err.error.response);        
        this.errmessage = err.error.response;
        this.paymentForm.controls['totalmonths'].setValue('');
        this.paymentForm.controls['remainingamount'].setValue('');
        this.eligibleforpaymentplan = false;
        this.spinner.hide();
        console.log("this.errmessage====",this.errmessage);
        
      },
      complete: () => {
        console.log("completed ");
        this.spinner.hide();
      }
    })
  }

  enablepaymentplan() {
    this.enablepayment = true;
  }
  enablefinalsubmit() {
    this.finalsubmit = true;
  }
  submit() {
    if (this.paymentForm.invalid) {
      console.log("validstion failed");
      return
    }
    console.log("submit completed")
  }

}
