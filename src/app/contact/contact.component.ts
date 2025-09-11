import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactUsFrom : FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder){
    this.contactUsFrom = this.fb.group({
      'name': new FormControl('', [Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z ]+$/), Validators.required]),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'mobile': new FormControl('', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      'subject': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
      'message': new FormControl('', [Validators.pattern(/^[A-Za-z0-9]+$/)])
    });
  }
  isSubmitted: boolean = false;
  message: string = "";
  submit(){
    this.isSubmitted = true;
    if(this.contactUsFrom.invalid){
      return;
    }
    this.message = "Sending your message...";

    const templateParams = {
    name: this.contactUsFrom.value.name,
    email: this.contactUsFrom.value.email,
    mobile: this.contactUsFrom.value.mobile,
    subject: this.contactUsFrom.value.subject,
    message: this.contactUsFrom.value.message,
  };
  emailjs.send(
    'service_l8la4oe',
    'template_8gn29l8',
    templateParams,
    '9g7BaOkPC1lcih73D'
  )
  .then((result: EmailJSResponseStatus) => {
    this.message = "Thank you! We'll get back to you soon...!";
    setTimeout(()=>{
      this.message = "";
    }, 3000);
    this.contactUsFrom.reset();
  }, (error) => {
    this.message = "Failed to send message. Please try again.";
    console.error(error);
  });
 }
}
