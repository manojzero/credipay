import { Component, OnInit, InjectionToken, ElementRef, Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToastrConfig, ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PagemoduleModule } from '../../pagemodule/pagemodule.module';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule,
    MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, PagemoduleModule, AlertModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AlertConfig, HttpClient, TranslateService],

})

export class LoginComponent implements OnInit {
  public loginForm: any = FormGroup; message: string = '';
  submitted = false; checklogin = false;
  open: boolean = true;
  dismissible: boolean = true;
  timeout: number = 5000;
  authService: AuthService;

  constructor(private formBuilder: FormBuilder, private authService1: AuthService, 
    private el: ElementRef, public translate: TranslateService,
    public dialog: MatDialog, private spinner: NgxSpinnerService,
  public router:Router) {
    translate.setDefaultLang('en');
    if (typeof window !== 'undefined' && window.localStorage) {
      translate.use(localStorage.getItem('lang') || 'en');
    }
    this.authService = inject(AuthService)
  }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.loginForm = this.formBuilder.group({
      dossier_id: ['', [Validators.required, Validators.pattern("^[0-9]*$"),]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {

    this.spinner.show();
    this.message = '';
    this.checklogin = false;
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.spinner.hide();
      return;
    }
    console.log(this.loginForm.value);
    let jsonbody = {
      userName: this.loginForm.controls['dossier_id'].value,
      password: this.loginForm.controls['password'].value
    }
    this.authService.login(jsonbody).subscribe({
      next: (data: any) => {
        console.log("logged in suceessfully");
        this.message = "Welcome to Credipay!";
        this.authService.setUserLoggedIn(true)
        this.authService.changeUsername(this.loginForm.controls['dossier_id'].value);
        if (typeof window !== "undefined") {
          window.localStorage.setItem("dossier", data.response.dossier_id);
          window.localStorage.setItem("finalToken", data.response.finalToken);
          window.localStorage.setItem("response", JSON.stringify(data.response));
          window.location.reload();
        }
      },
      error: (err: any) => {
        console.log("logged in failure", err);
        this.message = err.error.message
        this.checklogin = true;
        this.spinner.hide();
        // this.toastr.error(err)
      },
      complete: () => {
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
        console.log("logged in complete");
      },
    });
    //   // if (this.loginForm.controls['dossier_id'].value === '123456' && this.loginForm.controls['password'].value === '123456') {
    //   //   // this.toastr.success("Welcome to Creditpay!")
    //   //   this.message = "Welcome to Creditpay!"
    //   //   this.authService.setUserLoggedIn(true)
    //   //   this.authService.changeUsername(this.loginForm.controls['dossier_id'].value);

    //     if (typeof window !== "undefined") {
    //       window.localStorage.setItem("dossier", this.loginForm.controls['dossier_id'].value);
    //       window.location.reload();
    //     }
    //     console.log("-------------");
    //     // emit a change event after 2 seconds

    //     setTimeout(() => {
    //       this.spinner.hide();
    //     }, 3000)

    //   } else {
    //     // this.toastr.error("invalid userid & password")
    //     this.message = 'invalid Dossiers ID & Password'
    //     this.checklogin = true;
    //   }
  }

  close() {
    console.log("INSIDE CLOSE CALL");

    this.loginForm.reset();
    this.loginForm.controls['dossier_id'].setValue(null)
    this.loginForm.controls['password'].setValue(null)
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("dossier"); 
      window.location.reload();
    }
  }
}
