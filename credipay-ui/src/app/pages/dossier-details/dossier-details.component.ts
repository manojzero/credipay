import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { DossiersComponent } from './components/dossiers/dossiers.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { PagemoduleModule } from "../../pagemodule/pagemodule.module";
import { DossierDetailsService } from '../../service/dossier-details.service';


@Component({
  selector: 'app-dossier-details',
  standalone: true,
  imports: [RouterModule, DossiersComponent, TranslateModule, PagemoduleModule],
  templateUrl: './dossier-details.component.html',
  styleUrl: './dossier-details.component.css',
  providers: [HttpClient, TranslateService]
})
export class DossierDetailsComponent implements OnInit {
  public dossierData: any = []; 
  public Outstanding_Balance: string = '€ 0'; 
  message: string = '';
  
  constructor(private authService: AuthService, public spinner: NgxSpinnerService, private dossierService: DossierDetailsService,
    private router: Router, private activatedroute: ActivatedRoute, public translate: TranslateService) {
    
  }

  ngOnInit(): void {
    this.getDossierDetails();
  }


  getDossierDetails() {
      this.dossierService.getDossierDetails().subscribe({
        next: (value) => {
          if (Object.values(value[0]).every(value => value == "€ undefined") == false){          
            this.dossierData = value;
            this.Outstanding_Balance = value[0]?.openstaandbedrag;
          }
        }, error: (err) => {
          this.message = err.message;
          this.spinner.hide();
        }, complete: () => {
        },

      })
    
  }

  nav() {
    try {
      console.log("-------------", this.dossierData[0].firmanaam);
      this.spinner.show();
      // this.router.navigate([path])
      this.router.navigate(['/dossier-details/facturen'], {
        state: {
          client_name: this.dossierData[0].firmanaam
        }
      });
    } catch (error) {
      console.log("=========" + error);
    }
  }
}


