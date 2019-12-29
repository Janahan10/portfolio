import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAreaComponent } from './resume-area.component';

describe('ResumeAreaComponent', () => {
  let component: ResumeAreaComponent;
  let fixture: ComponentFixture<ResumeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
