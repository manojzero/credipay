import { Component, OnInit, InjectionToken, ElementRef, Injectable, inject, Output, EventEmitter, ViewChild } from '@angular/core';
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
  @Output("isloggedin") isloggedin: EventEmitter<any> = new EventEmitter();
  public loginForm: any = FormGroup; 
  message: string = '';
  open: boolean = true; 
  isSubmitted:boolean = false;
  authService: AuthService;
  @ViewChild('closebutton') closebutton: any;

  constructor(private formBuilder: FormBuilder, 
    public translate: TranslateService,
    public dialog: MatDialog, private spinner: NgxSpinnerService,
  public router:Router) {
    translate.setDefaultLang('en');
    if (typeof window !== 'undefined' && window?.localStorage) {
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
    if (this.loginForm.invalid) {
      return;
    }
   
    this.spinner.show();
    this.message = '';

    let jsonbody = {
      userName: this.loginForm.controls['dossier_id'].value,
      password: this.loginForm.controls['password'].value.replace(/[/]/g, '')
    }

    this.authService.login(jsonbody).subscribe({
      next: (data: any) => {
       
        this.spinner.hide();
        this.closebutton.nativeElement.click();
        localStorage.setItem('isloggedin', "true");
        this.router.navigate(['/dossier-details']);
      },
      error: (err: any) => {
        this.spinner.hide();
        this.message = err.error.message
      },
      complete: () => {
        this.spinner.hide();
      },
    });
   
  }

  close() {

    this.loginForm.reset();
    this.loginForm.controls['dossier_id'].setValue(null)
    this.loginForm.controls['password'].setValue(null)

  }
}
