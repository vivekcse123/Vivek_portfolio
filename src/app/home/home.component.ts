import { Component, ElementRef, AfterViewInit, ViewChild, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('typewriter') typewriterElement!: ElementRef;

  constructor(private zone: NgZone) {}
  ngOnInit(): void {
      setTimeout(() =>{
        this.changeColor();
      }, 1000);
  }
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const roles = [
        { text: "Frontend Developer", class: "color1" },
        { text: "Angular Developer", class: "color2" },
        { text: "JavaScript Developer", class: "color3" }
      ];

      const typingSpeed = 100;
      const pauseTime = 1500;
      const textElement = this.typewriterElement.nativeElement;

      let roleIndex = 0;
      let charIndex = 0;
      let typing = true;

      const typeWriterEffect = () => {
        const currentRole = roles[roleIndex];
        textElement.className = `typing-text ${currentRole.class}`;

        if (typing) {
          if (charIndex <= currentRole.text.length) {
            textElement.textContent = currentRole.text.substring(0, charIndex++);
            setTimeout(typeWriterEffect, typingSpeed);
          } else {
            typing = false;
            setTimeout(typeWriterEffect, pauseTime);
          }
        } else {
          if (charIndex >= 0) {
            textElement.textContent = currentRole.text.substring(0, charIndex--);
            setTimeout(typeWriterEffect, typingSpeed / 2);
          } else {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeWriterEffect, 500);
          }
        }
      };

      textElement.textContent = '';
      typeWriterEffect();
    });
  }
  bgColor: string = "";
  changeColor(){
    const colors = ["red", "yellow", "orange", "Brown", "purple"];
    this.bgColor = colors[Math.floor(Math.random() * colors.length)];
  }
}
