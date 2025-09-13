import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'myApp';
  ngOnInit(): void {
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
      // Load saved theme or default to dark
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.body.classList.add(savedTheme + '-theme');
      themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

      themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
          document.body.classList.replace('dark-theme', 'light-theme');
          localStorage.setItem('theme', 'light');
          themeToggle.textContent = '☀️';
        } else {
          document.body.classList.replace('light-theme', 'dark-theme');
          localStorage.setItem('theme', 'dark');
          themeToggle.textContent = '🌙';
        }
      });
    }
  }
}
