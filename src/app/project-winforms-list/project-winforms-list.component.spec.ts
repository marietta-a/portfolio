import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWinformsListComponent } from './project-winforms-list.component';

describe('ProjectWinformsListComponent', () => {
  let component: ProjectWinformsListComponent;
  let fixture: ComponentFixture<ProjectWinformsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectWinformsListComponent]
    });
    fixture = TestBed.createComponent(ProjectWinformsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
