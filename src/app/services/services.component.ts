import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
   contactForm: FormGroup = new FormGroup({});
   constructor(private fb : FormBuilder){
    this.contactForm = this.fb.group({
      'name': new FormControl('', [Validators.pattern(/^[a-zA-Z\s]+$/), Validators.required]),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'mobile': new FormControl('', [Validators.pattern(/^[6-9]\d{9}$/), Validators.required]),
      'careerDevelopment': new FormControl(false),
      'resumeReview': new FormControl(false),
      'interviewPreparation': new FormControl(false),
      'teachingTraining': new FormControl(false),
      'mentorship': new FormControl(false),
      'linkedinProfile': new FormControl(false),
      'portfolioGuidance': new FormControl(false),
      'message': new FormControl('', [Validators.minLength(50), Validators.maxLength(300)])
    });
   }

   getSelectedServices() {
    const services: string[] = []; // array which contains all services....
    if (this.contactForm.value.careerDevelopment) {
      services.push('Career Development Coaching')
    };
    if (this.contactForm.value.resumeReview){
      services.push('Resume Review');
    }
    if (this.contactForm.value.interviewPreparation){
      services.push('Interview Preparation');
    }
    if (this.contactForm.value.teachingTraining){
      services.push('Teaching & Training');
    }
    if (this.contactForm.value.mentorship){
      services.push('Mentorship');
    }
    if (this.contactForm.value.linkedinProfile){
      services.push('LinkedIn Profile Creation');
    }
    if (this.contactForm.value.portfolioGuidance){
      services.push('Portfolio Guidance');
    }
    return services.join(', ');
  }

  isSubmitted: boolean = false;
  message: string = "";
  msg: string = "";
  count: number = 50;

  ngOnInit(): void {
  this.contactForm.get('message')?.valueChanges.subscribe((value: string) => {
    this.count = value?.length || 0;
  });
}



  sendData() {
  this.isSubmitted = true;

  if (this.contactForm.invalid) {
    return;
  }

  this.message = "Please wait! sending your data...!";

  const templateParams = {
    name: this.contactForm.value.name,
    email: this.contactForm.value.email,
    mobile: this.contactForm.value.mobile,
    services: this.getSelectedServices(),
    message: this.contactForm.value.message,
    time: new Date().toLocaleString()
  };

  emailjs.send(
    'service_l8la4oe',
    'template_z665kg8',
    templateParams,
    '9g7BaOkPC1lcih73D'
  )
  .then((result: EmailJSResponseStatus) => {
    this.message = "Thank you! we'll get back to you soon...!";
    setTimeout(() =>{
      this.message = "";
    }, 3000);
    this.contactForm.reset();
  }, (error) => {
    this.message = "Failed to send message. Please try again.";
    console.error(error);
  });
}
}
