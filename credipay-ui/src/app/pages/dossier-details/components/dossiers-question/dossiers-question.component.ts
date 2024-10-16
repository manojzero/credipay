import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PagemoduleModule } from '../../../../pagemodule/pagemodule.module';
import { DossiersComponent } from '../dossiers/dossiers.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common';
import { DossierDetailsService } from '../../../../service/dossier-details.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-dossiers-question',
  standalone: true,
  imports: [TranslateModule, AlertModule, FormsModule, CommonModule, PagemoduleModule, ReactiveFormsModule],
  templateUrl: './dossiers-question.component.html',
  styleUrl: './dossiers-question.component.css',
  providers: [TranslateService, AlertConfig, FormBuilder]
})
export class DossiersQuestionComponent {
  isSubmitted: any;
  disagreement: any;
  confirm: any;
  Clientconfirmed: any;
  value: any;
  public credisolvform: any = FormGroup;
  client_name: any;
  confirmdisagreement: any;
  progressInfos: any[] = []; selectedFiles: any; message: string[] = []; previews: string[] = [];
  file_data: any[] = []; file_name: string[] = []
  constructor(public spinner: NgxSpinnerService, private router: Router, private activatedroute: ActivatedRoute, private formBuilder: FormBuilder, private dossierservice: DossierDetailsService
  ) {
    const navigation = this.router.getCurrentNavigation();
    console.log("navigation", navigation)
    let state_datas: any = navigation?.extras.state;
    console.log("state_datas" + state_datas)
    if (state_datas)
      this.client_name = state_datas.client_name;
    console.log("current client name ", this.client_name)
  }

  selectedOption: string = '';
  selectedOptions: string = '';
  ngOnInit(): void {
    this.callSpinner();
    console.log("insiden  questions")
    this.value = this.activatedroute.snapshot.params['options'];
    this.initform();
  }
  callSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
  nav() {
    try {
      console.log("-------------Entry for doss ++", this.selectedOption);
      this.spinner.show();
      // this.router.navigate([path])
      this.router.navigateByUrl('/dossiers-question')
      this.callSpinner();
    } catch (error) {
      console.log("=========" + error);
    }
  }
  initform() {
    this.credisolvform = this.formBuilder.group({
      id: [0, Validators.required],
      dateOfBirth: [''],
      amount: [''],
      ibanFrom: [''],
      ibanTo: [''],
      deathcertificate: [''],
      deathcertificatename: [''],
      disputeletter: [''],
      disputelettername: [''],
      disagrementletter: [''],
      disagrementlettername: [''],
      file: ['']
    })
  }
  submit(type: string) {
    this.spinner.show()
    if (type == 'alreadypaid') {
      console.log("++++" + JSON.stringify(this.credisolvform.value));
      this.dossierservice.updatelogbook(window?.localStorage.getItem('dossier'), this.credisolvform.value).subscribe({
        next: (data: any) => {
          console.log("data " + data);
          if (data) {
            this.spinner.hide()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your data has been saved",
              showConfirmButton: false,
              timer: 2000
            }).then((result) => {
              this.spinner.show();
              this.router.navigate(['']).then(()=>{
                window.location.reload();
              }); 
            });
          }
          // this.location.back()
          
        },
        error: (err: any) => {
          console.log("err " + err);
          this.spinner.hide();
          if (err) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong. Please try submitting the data again.",
            });
          }
        },
        // complete: () => {
        //   console.log("completed ");          
        //   setTimeout(() => {
        //     window.location.reload();
        //     this.router.navigateByUrl('');            
        //   }, 2000);
        // }

      })
    }
    if (type == 'disagree') {
      console.log("++++" + JSON.stringify(this.credisolvform.value));
      this.dossierservice.updatelogbook(window?.localStorage.getItem('dossier'), this.credisolvform.value).subscribe({
        next: (data: any) => {
          console.log("data " + data);
          if (data) {
            this.spinner.hide();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your data has been saved",
              showConfirmButton: false,
              timer: 3000
            }).then((result) => {
              this.spinner.show();
              this.router.navigate(['']).then(()=>{
                window.location.reload();
              });              
            });
          }
          // this.location.back()
          
        },
        error: (err: any) => {
          console.log("err " + err);
          this.spinner.hide();
          if (err) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong. Please try submitting the data again",
            });
          }
        },
        // complete: () => {
        //   console.log("completed ");
        //   setTimeout(() => {
        //     this.router.navigateByUrl('');
        //     this.spinner.hide();           
        //   }, 1000);
        // }
      })
    }
    if (type == 'deathcertificate') {
      console.log("++++" + JSON.stringify(this.credisolvform.value));
      this.dossierservice.updatelogbook(window?.localStorage.getItem('dossier'), this.credisolvform.value).subscribe({
        next: (data: any) => {
          console.log("data " + data);
          if (data) {
            this.spinner.hide()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your data has been saved",
              showConfirmButton: false,
              timer: 2000
            }).then((result) => {
              this.spinner.show();
              this.router.navigate(['']).then(()=>{
                window.location.reload();
              }); 
            });
          }
          // this.location.back()
          
        },
        error: (err: any) => {
          console.log("err " + err);
          this.spinner.hide();
          if (err) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong. Please try submitting the data again",
            });
          }
        },
        // complete: () => {
        //   console.log("completed ");         
        //   setTimeout(() => {
        //     window.location.reload();
        //     this.router.navigateByUrl('');
        //   }, 2000);
        // }
      })
    }
  }

  uploadfiles(event: any, flag: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      if (flag == 'deathcertificate') {
        this.convertFile(file).then((base64: any) => {
          this.credisolvform.controls['deathcertificate'].setValue(base64);
          this.credisolvform.controls['deathcertificatename'].setValue(file.name);
        });
      }
      if (flag == 'disputeletter') {
        this.convertFile(file).then((base64: any) => {
          this.credisolvform.controls['disputeletter'].setValue(base64);
          this.credisolvform.controls['disputelettername'].setValue(file.name);
        });
      }
      if (flag == 'disagrementletter') {
        this.convertFile(file).then((base64: any) => {
          this.credisolvform.controls['disagrementletter'].setValue(base64);
          this.credisolvform.controls['disagrementlettername'].setValue(file.name);
        });
      }
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

}
