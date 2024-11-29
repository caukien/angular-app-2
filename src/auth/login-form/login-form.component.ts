import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  isSignDivVisiable: boolean = true;

  signUpObj: User = new User('', '');

  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onRegister() {
    const localUser = localStorage.getItem('hasAccount');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('hasAccount', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('hasAccount', JSON.stringify(users));
    }
    alert('Registration Success');
  }

  onLogin() {
    this.authService.onlogin(this.signUpObj).subscribe((res: any) => {
      if (res.access_token) {
        localStorage.setItem('access_token', res.access_token);
        this.router.navigateByUrl('/dashboard');
        alert('Login success!');
      } else {
        alert(res.error.message || 'Đăng nhập thất bại!');
      }
    });
  }

  // onLogin(): void {
  //   if (this.authService.login(this.username, this.password)) {
  //     this.loginSuccess.emit();
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }
}
