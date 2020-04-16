import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = "Projects";
  desc: string = "Below are a couple of projects I have created and worked on. Theres projects covered various topics and concepts I learned in school, as well as on my own. Each project below will have its own personal description including what language it was coded in, concepts used, and detailed description of what the program does."
  subtitle: string = "Technologies:"
}
