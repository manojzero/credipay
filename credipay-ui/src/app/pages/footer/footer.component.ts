import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PipesPipe } from '../../../app/assets/pipes.pipe';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule,PipesPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [HttpClient, TranslateService,PipesPipe],
})
export class FooterComponent {

  constructor(public translate: TranslateService,private sanitizer: DomSanitizer) {
  }

}
