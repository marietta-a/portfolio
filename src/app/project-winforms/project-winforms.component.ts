import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ProjectWinformsListComponent } from '../project-winforms-list/project-winforms-list.component';

@Component({
  standalone: true,
  selector: 'app-project-winforms',
  templateUrl: './project-winforms.component.html',
  styleUrls: ['./project-winforms.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    ProjectWinformsListComponent
  ]
})
export class ProjectWinformsComponent {

}
