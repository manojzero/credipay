import { Component, NgModule, OnInit, Renderer2, HostListener, Inject, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, ViewChild, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { DOCUMENT, Location } from "@angular/common";
import { HeaderComponent } from './pages/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './pages/login/login.component';
import { PagemoduleModule } from './pagemodule/pagemodule.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DossierDetailsComponent } from './pages/dossier-details/dossier-details.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService, ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { AuthService } from './service/auth.service';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatButtonModule, LoginComponent, ToastrModule,
    MatButtonModule, MatDialogModule, MatToolbarModule, MatMenuModule, RouterModule,
    MatButtonToggleModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule,
    MatDialogActions, MatDialogClose, DossierDetailsComponent, NgxSpinnerModule,
    MatDialogTitle, MatDialogContent, PagemoduleModule, HttpClientModule, TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient, TranslateService],
})
export class AppComponent implements OnInit {
  title = 'credipay';
  isCollapsed = true;
  http = inject(HttpClient)
  onMouseMove(e: MouseEvent) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");
    var posX: number = 0;
    var posY: number = 0;

    if (e) {
      posX = e.clientX - window.innerWidth / 2;
      posY = e.clientY - window.innerWidth / 6;
    } else {
      console.log("popopopop");

    }


    // var posX = e.clientX - window.innerWidth / 2;
    // var posY = e.clientY - window.innerWidth / 6;
    if (squares1 !== null) {
      squares1.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)";
    }
    if (squares2 !== null) {
      squares2.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)";
    }
    if (squares3 !== null) {
      squares3.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)";
    }
    if (squares4 !== null) {
      squares4.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)";
    }
    if (squares5 !== null) {
      squares5.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)";
    }
    if (squares6 !== null) {
      squares6.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)";
    }
    if (squares7 !== null) {
      squares7.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)";
    }
    if (squares8 !== null) {
      squares8.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)";
    }
  }

  public modalRef!: BsModalRef;

  constructor(
    private renderer: Renderer2, public dialog: MatDialog,
    public location: Location, private spinner: NgxSpinnerService, private modalService: BsModalService,
    public authService: AuthService, private router: Router, private modal: ModalModule,
    @Inject(DOCUMENT) document: any, public translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    if (typeof window !== 'undefined' && window.localStorage) {
      translate.use(localStorage.getItem('lang') || 'en');
    }
  }

  @HostListener("window:scroll", ["$event"])

  onWindowScroll() {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 80) {
        var element = document.getElementById("navbar-top");
        if (element) {
          element.classList.remove("navbar-transparent");
          element.classList.add("bg-danger");
        }
      } else {
        var element = document.getElementById("navbar-top");
        if (element) {
          element.classList.add("navbar-transparent");
          element.classList.remove("bg-danger");
        }
      }
    }
  }


  ngOnInit() {

    this.spinner.hide();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.onWindowScroll();

    if (typeof document !== 'undefined') {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("register-page");

      // Create a new MouseEvent object with dummy values
      const dummyMouseEvent = new MouseEvent('mousemove', {
        clientX: 0,
        clientY: 0,
      });

      // Call onMouseMove with the dummy MouseEvent
      this.onMouseMove(dummyMouseEvent);
    }

  }

  username: string = '';


  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true, panelClass: 'custom-dialog-background',
    });
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("register-page");
    }
  }



}


