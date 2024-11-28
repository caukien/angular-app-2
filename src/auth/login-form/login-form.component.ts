import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string = '';
  password: string = '';

  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.loginSuccess.emit();
    } else {
      alert('Invalid credentials');
    }
  }
}