import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

  scrollDown(id: string): void {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }

  desc1:string = "Software Engineering Student at Ontario Tech University"
}
