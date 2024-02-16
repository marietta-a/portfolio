import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    SocialMediaComponent
  ]
})
export class ContactComponent {

}
