import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNoteComponent } from './about-note.component';

describe('AboutNoteComponent', () => {
  let component: AboutNoteComponent;
  let fixture: ComponentFixture<AboutNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutNoteComponent]
    });
    fixture = TestBed.createComponent(AboutNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
