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
import { FooterComponent } from './pages/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatButtonModule, LoginComponent, ToastrModule,
    MatButtonModule, MatDialogModule, MatToolbarModule, MatMenuModule, RouterModule,
    MatButtonToggleModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule,
    MatDialogActions, MatDialogClose, DossierDetailsComponent, NgxSpinnerModule,
    MatDialogTitle, MatDialogContent, PagemoduleModule, HttpClientModule, TranslateModule, FooterComponent
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
  

  public modalRef!: BsModalRef;

  constructor(
    private renderer: Renderer2, public dialog: MatDialog,
    public location: Location, private spinner: NgxSpinnerService, private modalService: BsModalService,
    public authService: AuthService, private router: Router, private modal: ModalModule,
    @Inject(DOCUMENT) document: any, public translate: TranslateService
  ) {
    
    if (typeof window !== 'undefined' && window?.localStorage) {
      translate.use(localStorage.getItem('lang') || 'en');
    }
  }

 

  ngOnInit() {
    this.spinner.hide();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }



}


