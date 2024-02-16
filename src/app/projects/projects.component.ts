import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ProjectWebListComponent } from '../project-web-list/project-web-list.component';
import { ProjectWinformsListComponent } from '../project-winforms-list/project-winforms-list.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    ProjectWebListComponent,
    ProjectWinformsListComponent
  ]
})
export class ProjectsComponent {

}
