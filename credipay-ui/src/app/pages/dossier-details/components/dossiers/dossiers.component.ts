import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../../../../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DossierDetailsService } from '../../../../service/dossier-details.service';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { PagemoduleModule } from '../../../../pagemodule/pagemodule.module';
import {Title} from "@angular/platform-browser";
import {Location} from '@angular/common';
@Component({
  selector: 'app-dossiers',
  standalone: true,
  imports: [TranslateModule, AlertModule, FormsModule, CommonModule, PagemoduleModule, ReactiveFormsModule],
  templateUrl: './dossiers.component.html',
  styleUrl: './dossiers.component.css',
  providers: [TranslateService, AlertConfig, FormBuilder]

})
export class DossiersComponent implements OnInit {
  public dossierDetails: any = []; dossier_number: any; public dossierTotalDetails: any = [];
  public Outstanding_Balance: string = ''; message: string = '';
  public aValue: any = "";
  public payment_link = "";
  public paymentbutton_link = "";
  public language: any = "en";
  @ViewChild('myModalClose') modalClose: any;
  data: any;
  errmessage: any;
  dismissible: boolean = true;
  open: boolean = true;
  selectedOption: string = '';
  selectedOptions: string = '';
  public credisolvform: any = FormGroup;
  client_name: any;
  constructor(private authService: AuthService, private spinner: NgxSpinnerService,
    private router: Router, private activatedroute: ActivatedRoute, private elementRef: ElementRef,
    private renderer: Renderer2, public translate: TranslateService, private dossierService: DossierDetailsService, private formBuilder: FormBuilder,
    private titleService:Title, private location: Location) {
   
   
   
    translate.get('SUB-TOTAL').subscribe((text: string) => {
      this.aValue = text
    });
    console.log("---------", this.aValue);
    {
      const navigation = this.router.getCurrentNavigation();
      console.log("navigation",navigation)
      let state_datas: any = navigation?.extras.state;
      console.log("state_datas" + state_datas)
      if (state_datas)
        this.client_name = state_datas.client_name;
    }
    console.log("current client name ", this.client_name)

  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window?.localStorage) 
    this.language = localStorage.getItem('lang');
    
    this.getDossierDetails();
    this.initform();
  }
  callSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  getDossierDetails() {
    this.spinner.show();
    
    this.dossierService.getDossierFacturenDetails().subscribe({
      next: (value) => {
        this.dossierDetails = value[0]?.dossierDetails;
        this.dossierTotalDetails = value[0]?.dossierTotalDetails;
        this.Outstanding_Balance = value[0].Outstanding_Balance;

        this.payment_link = value[0].paymentLink;
        this.paymentbutton_link = value[0].paymentButtonLink;
        this.language = this.language?.toUpperCase();
        this.payment_link = this.payment_link.replace("XXXlanguageXXX", this.language);
        this.paymentbutton_link = this.paymentbutton_link.replace("XXXlanguageXXX", this.language);

      }, error: (err) => {
        this.message = err.message;
        this.spinner.hide();
      }, complete: () => {
        this.callSpinner();
      },
    })
    // let aValue = 'SUB-TOTAL' || this.translate;
    // console.log("==============" + JSON.stringify(this.aValue));

    // this.dossierDetails = [
    //   { Dossier: this.dossier_number, Invoice_Reference: '23R-322.900.116', Date_decheance: '14-03-2023', Somme_principle: '€ 131,57', Interest: '€ 1,25', Interests_damages_clause: '--', Collection_costs: '--', Total: '€ 132,82', Payments_made: '--', Pay: '€ 132,80' },
    //   { Dossier: this.dossier_number, Invoice_Reference: '23R-323.264.279', Date_decheance: '25-03-2023', Somme_principle: '€ 22,87', Interest: '€ 0,12', Interests_damages_clause: '--', Collection_costs: '--', Total: '€ 22,99', Payments_made: '--', Pay: '€ 22,99' },
    //   { Dossier: this.dossier_number, Invoice_Reference: '24R-323.622.161', Date_decheance: '26-01-2024', Somme_principle: '€ 20,00', Interest: '€ 0,01', Interests_damages_clause: '--', Collection_costs: '--', Total: '€ 20,01', Payments_made: '--', Pay: '€ 20,01' },
    // ]
    // this.dossierTotalDetails = [
    //   { Dossier: this.aValue, Somme_principle: '€ 174,44', Interest: '€ 1,38', Interests_damages_clause: '--', Collection_costs: '--', Total: '€ 175,82', Payments_made: '--', Pay: '€ 175,82' },
    //   { Dossier: "Payments received during the recovery procedure", Somme_principle: '', Interest: '', Interests_damages_clause: '', Collection_costs: '', Total: '', Payments_made: '', Pay: '--' },
    //   { Dossier: "A PAYER", Somme_principle: '', Interest: '', Interests_damages_clause: '', Collection_costs: '', Total: '', Payments_made: '', Pay: '€ 175,82' },
    // ]

    // this.Outstanding_Balance = "175,82 € ";

    // this.authService.getPartcularDossierDetails(this.dossier_number).subscribe({
    //   next: (data) => {
    //     console.log('----', data);

    //   }, error: (err) => {

    //   }, complete() {

    //   },
    // })
  }

  onFullPay(value: any) {

    if (value === 'popup') {
      this.modalClose.nativeElement.click();
    } else {

    }

  }

  paymentPlan() {
      this.spinner.show();
      this.errmessage = ''

      
      this.dossierService.getDossierPaymentplancheck().subscribe({
        next: (data: any) => {
          this.spinner.hide();
          this.router.navigateByUrl('payment-plan');
        },
        error: (err: any) => {
          this.spinner.hide();
          this.errmessage = err.error.response;
          Swal.fire({
            title: "Warning",
            text: this.errmessage,
            icon: "warning",
            confirmButtonText: "OK",
            width: 430,
          })
        
        },
        complete: () => {
          this.spinner.hide();
        },

      })

  }

  initform() {
    this.credisolvform = this.formBuilder.group({
      id: [0, Validators.required],
      dateOfBirth: [''],
      amount: [''],
      ibanFrom: [''],
      ibanTo: ['']
    })
  }
  credisolvAlreadypaid() {
    throw new Error('Method not implemented.');
  }
  nav() {
    try {
      console.log("------------- DOSS ENRTY" + this.selectedOption);
      this.spinner.show();
      // this.router.navigate([path])
      this.router.navigate(['/dossier-questions/' + this.selectedOption], {
        state: {
          client_name: this.client_name,
          
        }
      });
      this.callSpinner();
    } catch (error) {
      console.log("=========" + error);
    }
  }

  back() {
    this.location.back();
  }
}
