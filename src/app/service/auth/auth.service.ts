import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.API_URL}:${environment.API_PORT}/auth`;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private forgotPasswordEmail: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  setForgotPasswordEmail(email: string): void {
    this.forgotPasswordEmail = email;
  }

  getForgotPasswordEmail(): string | null {
    return this.forgotPasswordEmail;
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  forgotPassword(email: string) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  verifyOtp(email: string, otp: string) {
    return this.http.post(`${this.apiUrl}/verify-otp`, { email, otp });
  }

  updatePassword(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/update-password`, { email, password });
  }

  setLoggedIn(value: boolean, token: string) {
    this.loggedIn.next(value);
    if (!value) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } else {
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    }
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
