import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWinformsComponent } from './project-winforms.component';

describe('ProjectWinformsComponent', () => {
  let component: ProjectWinformsComponent;
  let fixture: ComponentFixture<ProjectWinformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectWinformsComponent]
    });
    fixture = TestBed.createComponent(ProjectWinformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
