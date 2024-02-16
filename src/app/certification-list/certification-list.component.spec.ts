import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationListComponent } from './certification-list.component';

describe('CertificationListComponent', () => {
  let component: CertificationListComponent;
  let fixture: ComponentFixture<CertificationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationListComponent]
    });
    fixture = TestBed.createComponent(CertificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
