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
      title: 'Employee Management System',
      description: 'A responsive Angular web app to manage employee data with CRUD operations using RESTful APIs.',
      link: 'https://github.com/vivekcse123/employee-management-system'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using HTML, CSS, JavaScript, and Bootstrap.',
      link: 'https://github.com/vivekcse123/portfolio'
    },
    {
      title: 'Mini Calculator App',
      description: 'A simple JavaScript calculator with modern UI and keyboard support.',
      link: 'https://github.com/vivekcse123/mini-calculator'
    },
    {
      title: 'Color Picker Tool',
      description: 'Tool that displays RGB, HEX, CMYK values with live preview and clipboard copy.',
      link: 'https://github.com/vivekcse123/color-picker'
    },
    {
      title: 'Learning Management System',
      description: 'LMS platform to track daily work, upload notes, and monitor progress (Angular-based).',
      link: 'https://github.com/vivekcse123/lms-app'
    }
  ];
}
