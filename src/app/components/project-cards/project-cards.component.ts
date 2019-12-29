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
  desc: string = "Below are just a couple of projects I have worked. Projects covering various fields learned in school, as well as in my own time."
  subtitle: string = "Technologies:"
}
