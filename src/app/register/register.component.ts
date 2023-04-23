import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.authService.register(this.registrationForm.value).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.authService.setLoggedIn(true, response.token);
          this.isLoading = false;
        },
        (error) => {
          console.error('Registration failed:', error);
          this.isLoading = false;
          this.errorMessage = 'Registration failed. Please check your form data and try again.';
        }
      );
    }
  }
}
