import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWebListComponent } from './project-web-list.component';

describe('ProjectWebListComponent', () => {
  let component: ProjectWebListComponent;
  let fixture: ComponentFixture<ProjectWebListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectWebListComponent]
    });
    fixture = TestBed.createComponent(ProjectWebListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
