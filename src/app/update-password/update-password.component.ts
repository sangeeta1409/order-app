import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  email: string = "";
  password: string = "";
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;

    this.authService.updatePassword(this.email, this.password).subscribe(
      res => {
        console.log('Password updated successfully');
        this.router.navigate(['/']);
        this.isLoading = false;
        this.successMessage = 'Password updated successfully';
      },
      err => {
        this.isLoading = false;
        console.error('Error updating password:', err);
        this.errorMessage = 'Error updating password';
      }
    );
  }
}
