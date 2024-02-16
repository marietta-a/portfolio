import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AboutNoteComponent } from '../about-note/about-note.component';
import { ServicesListComponent } from '../services-list/services-list.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    AboutNoteComponent,
    ServicesListComponent,
    SocialMediaComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeComponent {
}
