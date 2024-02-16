import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { BlogComponent } from '../blog/blog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesListComponent } from '../services-list/services-list.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [
    FormsModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent,
    ServicesListComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutComponent {

}
