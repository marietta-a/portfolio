import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ProjectWebListComponent } from '../project-web-list/project-web-list.component';

@Component({
  standalone: true,
  selector: 'app-project-web',
  templateUrl: './project-web.component.html',
  styleUrls: ['./project-web.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    ProjectWebListComponent
  ]
})
export class ProjectWebComponent {

}
