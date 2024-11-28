import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoggedIn = false;
  title = 'app2';
  constructor(private authService: AuthService){}
  onLoginSuccess(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
