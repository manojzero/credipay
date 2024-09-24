import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import DOMPurify from 'dompurify';
// import * as urlParse from 'url-parse';

@Pipe({
  name: 'pipes',
  standalone: true
})
export class PipesPipe implements PipeTransform { 
  text:any;

  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string) {
    //  this.text=this.sanitizer.bypassSecurityTrustHtml(value);
    //  return  this.text;
    return this.sanitizer.sanitize(SecurityContext.HTML, value);
  }

}