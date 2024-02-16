import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CertificationListComponent } from '../certification-list/certification-list.component';

@Component({
  standalone: true,
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CertificationListComponent
  ]
})
export class CertificationsComponent {

}
