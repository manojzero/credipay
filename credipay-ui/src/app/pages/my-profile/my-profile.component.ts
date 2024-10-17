import { Component, HostListener } from '@angular/core';
import { PagemoduleModule } from '../../pagemodule/pagemodule.module';
import { AlertConfig, AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProfileService } from '../../service/profile.service';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [PagemoduleModule, AlertModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, TranslateModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css',
  providers: [HttpClient, AlertConfig, TranslateService]
})
export class MyProfileComponent {

  focus: boolean = false; focus1: boolean = false; focus2: boolean = false;
  public profileForm: any = FormGroup; message: string = '';
  submitted = false; checkmesage: boolean = false;
  open: boolean = true; dismissible: boolean = true; timeout: number = 5000;
  data: any;

  constructor(private formBuilder: FormBuilder, private authService: ProfileService) {

  }

  ngOnInit() {
    this.initProfileForm();
    this.getmyprofiledata();
  }


  initProfileForm() {
    this.profileForm = this.formBuilder.group({
      id: [0, Validators.required],
      firmanaam: ['', Validators.required],
      fullname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      telephone: [null, Validators.required],
      btw_number: ['', Validators.required],
      mobile: [null, Validators.required],
      fax: ['', Validators.required],
      address: ['', Validators.required],
      address1: [null],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      language: [null, Validators.required],
      reference_no: ['', Validators.required],
    })
  }

  onSubmit() {
    console.log("==============", this.profileForm.value);
    this.message = ''; this.checkmesage = false;
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    let final_form = {
      id: this.profileForm.get("id").value,
      firmanaam: this.profileForm.get("firmanaam").value,
      voornaam: this.profileForm.get("fullname").value,
      naam: this.profileForm.get("lastname").value,
      email: this.profileForm.get("email").value,
      telefoon: this.profileForm.get("telephone").value,
      btw: this.profileForm.get("btw_number").value,
      bedrijf: this.profileForm.get("mobile").value,
      fax: this.profileForm.get("fax").value,
      adres: this.profileForm.get("address").value,
      //address1: [null], //unable to find address1
      //city: [''], //unable to find city 
      postcode: this.profileForm.get("zipcode").value,
      land: this.profileForm.get("country").value,
      taal: this.profileForm.get("language").value,
      rekeningnummer: this.profileForm.get("reference_no").value,
    }
    console.log("==============", final_form);
    this.authService.updateProfile(final_form.id, final_form).subscribe({
      next: (value) => {
        this.checkmesage = true;
        console.log(value.message)
        this.message = value.message;
      }, error: (err) => {
        this.message = err.error.message;
      }, complete: () => {
        setTimeout(() => {
        }, 2000);
      },
    });
  }
  getmyprofiledata() {
      this.authService.getuserdetails().subscribe({
        next: (data: any) => {
          this.data = data.result
          console.log("data " + data.result);
          this.setprofileformdata();
        },
        error: (err: any) => {
          console.log("err " + JSON.stringify(err));
        },
        complete: () => {
          console.log("completed ");
        }

      })
  }
  setprofileformdata() {
    this.profileForm = this.formBuilder.group({
      id: [this.data.id],
      firmanaam: [this.data.firmanaam],
      fullname: [this.data.voornaam],
      lastname: [this.data.naam],
      email: [this.data.email],
      telephone: [this.data.telefoon],
      btw_number: [this.data.btw],
      mobile: [this.data.bedrijf],
      fax: [this.data.fax],
      address: [this.data.adres],
      address1: [null], //unable to find address1
      city: [''], //unable to find city 
      zipcode: [this.data.postcode],
      country: [this.data.land],
      language: [this.data.taal],
      reference_no: [this.data.rekeningnummer],
    })
  }

}