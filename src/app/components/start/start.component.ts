import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private matIconRegistry : MatIconRegistry,
              private domSanitizer : DomSanitizer) { 
                this.matIconRegistry.addSvgIcon(
                  "linkedin",
                  this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/linkedin.svg")
                );
                this.matIconRegistry.addSvgIcon(
                  "github",
                  this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/github.svg")
                );
                this.matIconRegistry.addSvgIcon(
                  "mail",
                  this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/mail.svg")
                );
              }

  ngOnInit() {
  } 
  
  clickMe(e) {
    // console.log(e);
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen; //|| docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen;// || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement){ //&& !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }
}
