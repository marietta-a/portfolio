import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectWinformsComponent } from './project-winforms/project-winforms.component';
import { ProjectWebComponent } from './project-web/project-web.component';
import { CertificationsComponent } from './certifications/certifications.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'winforms',
        component: ProjectWinformsComponent
      },
      {
        path: 'web',
        component: ProjectWebComponent
      },
      {
        path: 'certifications',
        component: CertificationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
