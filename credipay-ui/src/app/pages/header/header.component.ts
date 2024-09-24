import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterModule } from '@angular/router';
import * as nouislider from 'nouislider';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PagemoduleModule } from '../../pagemodule/pagemodule.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DossierDetailsComponent } from '../dossier-details/dossier-details.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatToolbarModule, FormsModule, CommonModule, ReactiveFormsModule, LoginComponent, PagemoduleModule,
    MatButtonToggleModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDialogActions, MatDialogClose, RouterModule,
    MatDialogTitle, MatDialogContent, MatMenuModule, MatIconModule, RouterModule, HomeComponent, FooterComponent, TooltipModule,
    DossierDetailsComponent, NgxSpinnerModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient, TranslateService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  http = inject(HttpClient)
  public username: any = ''; isCollapsed = true;
  date = new Date(); modalRef: BsModalRef;
  pagination = 3;
  pagination1 = 1;
  lang: string = '';
  constructor(public dialog: MatDialog, private renderer: Renderer2,
    private modalService: BsModalService, private spinner: NgxSpinnerService, private router: Router,
    private authService: AuthService, public translate: TranslateService) {
    this.modalRef = new BsModalRef();
    translate.setDefaultLang('en');
    if (typeof window !== 'undefined' && window.localStorage) {
      translate.use(localStorage.getItem('lang') || 'en');
    }

  }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '800px',
    });
  }
  ngOnInit() {
    if (typeof window !== "undefined") {
      this.username = window.localStorage.getItem('dossier');
    }
    if (typeof document !== 'undefined') {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("index-page");

      const slider = document.getElementById("sliderRegular");
      if (slider instanceof HTMLElement) {
        nouislider.create(slider, {
          start: 40,
          connect: false,
          range: {
            min: 0,
            max: 100
          }
        });
      }



      var slider2 = document.getElementById("sliderDouble");
      if (slider2 instanceof HTMLElement) {
        nouislider.create(slider2, {
          start: [20, 60],
          connect: true,
          range: {
            min: 0,
            max: 100
          }
        });
      }
    }


    if (typeof window !== 'undefined' && window.localStorage) {
      this.lang = localStorage.getItem('lang') || 'en'
    }

  }
  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("index-page");
    }
  }

  toggleCollapse() {
    this.isCollapsed = this.isCollapsed;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  nav(path: string) {
    this.spinner.show();
    if (path === 'logout') {
      this.authService.logOut().subscribe({
        next: (value) => {
          console.log("logout successfull" + value);
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.clear()
          }
        }, error: (err) => {
          console.log("errrorrr logout failed");
          setTimeout(() => {
            this.spinner.hide();
          }, 3000);
        }, complete: () => {
          console.log("logout completed");
          this.router.navigateByUrl('')
          setTimeout(() => {
            this.spinner.hide();
            window.location.reload();
          }, 3000);
        },
      });
      // this.authService.logout(window.localStorage.getItem('dossier')).subscribe({
      //   next: (value) => {
      //     console.log("logout successfull" + value)
      //   }, error: (err) => {
      //     console.log("errrorrr logout failed");
      //   }, complete: () => {
      //     console.log("logout completed");
      //     setTimeout(() => {
      //       this.spinner.hide();
      //     }, 3000);
      //   },
      // });
      // if (typeof window !== 'undefined') {
      //   window.location.reload();
      // }

    } else {
      this.router.navigateByUrl(path)
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    }

  }

  language(language: any) {
    let selectedLanguage = language.target.value;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('lang', selectedLanguage);
    }
    this.translate.use(selectedLanguage);
  }
}
