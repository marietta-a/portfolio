import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AboutNoteComponent } from '../about-note/about-note.component';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    AboutNoteComponent
  ]
})
export class AboutComponent {

}
