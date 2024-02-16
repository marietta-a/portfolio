import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWebComponent } from './project-web.component';

describe('ProjectWebComponent', () => {
  let component: ProjectWebComponent;
  let fixture: ComponentFixture<ProjectWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectWebComponent]
    });
    fixture = TestBed.createComponent(ProjectWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
