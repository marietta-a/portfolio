import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet
  ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppComponent {
  title = 'portfolio';
  
  
}
