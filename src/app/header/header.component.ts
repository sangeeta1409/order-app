import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token');
  }

}
