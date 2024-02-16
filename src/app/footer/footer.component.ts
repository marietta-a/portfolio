import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AboutNoteComponent } from '../about-note/about-note.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    AboutNoteComponent,
    SocialMediaComponent
  ]
})
export class FooterComponent {

}
