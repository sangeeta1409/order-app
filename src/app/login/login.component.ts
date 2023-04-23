import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.authService.setLoggedIn(true, response.token);
          this.isLoading = false;
        },
        (error) => {
          console.error('Login failed:', error);
          this.isLoading = false;
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
        }
      );
    }
  }
}