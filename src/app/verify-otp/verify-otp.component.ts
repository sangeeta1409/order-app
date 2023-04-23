import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  email: string = "";
  otp: string = "";
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.email = this.authService.getForgotPasswordEmail() ?? "";
  }
  onSubmit() {
    this.isLoading = true;

    this.authService.verifyOtp(this.email, this.otp).subscribe(
      res => {
        console.log('OTP verified successfully');
        this.authService.setForgotPasswordEmail(this.email);
        this.successMessage = 'OTP verified successfully';
        this.isLoading = false;
        this.router.navigate(['/update-password']);
      },
      err => {
        this.isLoading = false;
        console.error('Error verifying OTP:', err);
        if (err.status === 404) { // Replace this with the appropriate condition based on your server's response
          this.router.navigate(['/forgot-password']);
        }
  
        this.errorMessage = 'Error verifying OTP, please recheck and try again';
      }
    );
  }
}
