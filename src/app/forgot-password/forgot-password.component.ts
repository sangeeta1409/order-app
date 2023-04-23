import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string = "";
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;

    this.authService.forgotPassword(this.email).subscribe(
      res => {
        console.log('Email sent successfully');
        this.authService.setForgotPasswordEmail(this.email);
        this.successMessage = 'Email sent successfully';
        this.isLoading = false;
        this.router.navigate(['/verify-otp']);
      },
      err => {
        this.isLoading = false;
        this.errorMessage = 'User does not exist or try after some time';
      }
    );
  }
}
