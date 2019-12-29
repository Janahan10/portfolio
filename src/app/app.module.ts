import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { SkillsCardsComponent } from './components/skills-cards/skills-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeAreaComponent } from './components/resume-area/resume-area.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectCardsComponent,
    SkillsCardsComponent,
    FooterComponent,
    ResumeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
