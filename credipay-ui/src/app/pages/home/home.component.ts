import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { PipesPipe } from '../../../app/assets/pipes.pipe';
import { Globals } from '../../utils/globals';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, TranslateModule,PipesPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpClient, TranslateService,PipesPipe]
})
export class HomeComponent implements OnInit {

  constructor(public global: Globals, private router: Router,) {
    
  }


  ngOnInit() {
    if(this.global.getloginstatus()){
          this.router.navigate(['/dossier-details'])
    }
  }

}
