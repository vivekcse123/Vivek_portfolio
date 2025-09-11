import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: "Home"},
    {path: 'project', component: ProjectsComponent, title: 'My Projects'},
    {path: 'resume', component: ResumeComponent, title: 'Vivek\'s Resume'},
    {path: 'services', component: ServicesComponent, title: 'My Services'},
    {path: 'contact', component: ContactComponent, title: 'Contact Vivek'},
    {path: '**', component: PageNotFoundComponent, title: "Page not found!"}
];
