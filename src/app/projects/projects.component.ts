import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Customer Management System',
      description: 'A responsive Angular web app to manage Customers data with CRUD operations using RESTful APIs.',
      link: 'https://github.com/vivekcse123/CMS-Project'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using Angular, TypeScript, HTML, CSS, JavaScript, and Bootstrap.',
      link: 'https://github.com/vivekcse123/Vivek_portfolio'
    },
    {
      title: 'Menstruation Tracker',
      description: 'An Angular-based Single Page Application to track the menstrual cycle of female employees in an organization.',
      link: 'https://github.com/vivekcse123/MS_Tracker'
    },
    {
      title: 'Angular Forms',
      description: 'Angular Forms: Template-Driven and Reactive Forms with proper validations.',
      link: 'https://github.com/vivekcse123/Angular-Forms'
    },
    {
      title: 'Angular Sharing Data',
      description: 'Sharing data between components using Observable.',
      link: 'https://github.com/vivekcse123/Angular-Observable'
    }
  ];
}
