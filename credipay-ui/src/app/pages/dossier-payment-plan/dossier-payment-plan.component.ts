import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import { NgxSpinnerService } from 'ngx-spinner';
import { PagemoduleModule } from '../../pagemodule/pagemodule.module';
import { DossierDetailsService } from '../../service/dossier-details.service';
import { DomSanitizer } from '@angular/platform-browser'
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dossier-payment-plan',
  standalone: true,
  imports: [FormsModule,RouterModule, CommonModule, PagemoduleModule, ReactiveFormsModule, AlertModule,TranslateModule],
  templateUrl: './dossier-payment-plan.component.html',
  styleUrl: './dossier-payment-plan.component.css',
  providers: [HttpClient, TranslateService, FormBuilder, AlertConfig]
})
export class DossierPaymentPlanComponent {
  total_pay: any = 0.00;
  paymentForm: any = FormGroup;
  errmessage: any = "";
  is_eligible_plan: any = false;
  minDate: String = '';
  maxDate: String = '';
  min_value: boolean= false;
  final_confirm_message: any = "";
  constructor(public translate: TranslateService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    public spinner: NgxSpinnerService, private dossierServ: DossierDetailsService, private sanitized: DomSanitizer,
    private router: Router, private location: Location
  ) {

  }

  ngOnInit(): void {
   
    const today = new Date();
    const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
    this.minDate = min.toISOString().slice(0, 10);
    const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 32);
   
    this.maxDate = max.toISOString().slice(0, 10);
    this.initForm();
    this.getDossierDetails();
  }

  initForm() {
    this.paymentForm = this.formBuilder.group({
      monthly_amount: [0, [Validators.required]],
      totalmonths: [0, Validators.required],
      remainingamount: [0, Validators.required],
      paymentDate: ["00-00-0000", Validators.required],
    });
  }

  
  getpaymentplan() {
    console.log("test")
    if (this.paymentForm.invalid) {
      return
    }
    this.is_eligible_plan = false;
    this.spinner.show();
    this.dossierServ.getDossierPaymentplan(this.paymentForm.value.monthly_amount).subscribe({
      next: (data: any) => {
      
        this.paymentForm.controls['totalmonths'].setValue(data.months);
        this.paymentForm.controls['remainingamount'].setValue(data.remaining_amount.toFixed(2));
        this.errmessage = "";
        this.final_confirm_message = this.translate.instant('Payment_Plan_confirm_message');
        this.final_confirm_message = this.final_confirm_message.replace("XXXAMOUNTXXX", "<span style='font-weight: bold;padding: 5px 10px;border: 1px solid;border-radius: 10px;'> € " + this.paymentForm.value.monthly_amount.toFixed(2)+"</span>");
        this.final_confirm_message = this.final_confirm_message.replace("XXXMONTHXXX", "<span style='font-weight: bold;padding: 5px 10px;border: 1px solid;border-radius: 10px;'> "+ data.months+"</span>");
        this.final_confirm_message = this.final_confirm_message.replace("XXXRAMOUNTXXX", "<span style='font-weight: bold;padding: 5px 10px;border: 1px solid;border-radius: 10px;'>€ " + data.remaining_amount.toFixed(2)+"</span>")
        this.final_confirm_message = this.sanitized.bypassSecurityTrustHtml(this.final_confirm_message)
        this.paymentForm.controls['paymentDate'].setValue("");
        this.is_eligible_plan = true;
        console.log("0000", this.paymentForm.controls['paymentDate'].errors );
      },
      error: (err: any) => {    
        if(typeof err.error.response === 'number' && !isNaN(err.error.response)){
        this.min_value = true
        this.errmessage = String(err.error.response);
        }else{
        this.min_value = false
        this.errmessage = err.error.response;
      }
        this.paymentForm.controls['totalmonths'].setValue(0);
        this.paymentForm.controls['remainingamount'].setValue(0);

        this.spinner.hide();
      },
      complete: () => {
        this.spinner.hide();
      }
    })
  }

  cancelplan(){
    this.is_eligible_plan = false;
    this.initForm();
  }

  getDossierDetails() {
      this.spinner.show();
      this.dossierServ.getDossierDetails().subscribe({
        next: (value) => {
            this.total_pay = value[0]?.total_pay;
            this.initForm();
        }, error: (err) => {
          this.spinner.hide();
        }, complete: () => {
          this.spinner.hide();
        },
      })
    
  }

  submitplan(){
    if (this.paymentForm.invalid) {
      return
    }
    this.spinner.show();
    this.dossierServ.submitPaymentPlan(this.paymentForm.value).subscribe({
      next: (value: any) => {
        this.spinner.hide();
        Swal.fire({
        
          text: this.translate.instant('Payment_plan_updated_message'),
          icon: "success"
        }).then(()=>{
          this.router.navigate(['/dossier-details']);
        })
       
        
      }, error: (err) => {
        this.errmessage = err.error.response;
        this.spinner.hide();
      }, complete: () => {
        this.spinner.hide();
      },
    });
  }

  back() {
    this.location.back();
  }
}
