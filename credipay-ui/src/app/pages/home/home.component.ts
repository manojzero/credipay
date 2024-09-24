import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { PipesPipe } from '../../../app/assets/pipes.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, TranslateModule,PipesPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpClient, TranslateService,PipesPipe]
})
export class HomeComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus: any;
  focus1: any;
  focus2: any;
  

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    if (typeof window !== 'undefined' && window.localStorage) {
      translate.use(localStorage.getItem('lang') || 'en');
    }
  }

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

  ngOnInit() {
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
  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      var body = document.getElementsByTagName("body")[0];
      body.classList.remove("register-page");
    }
  }



}
