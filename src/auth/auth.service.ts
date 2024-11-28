import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'any'
})
export class AuthService {
  private isAuthenticated = false;

  user: User[] = [new User('admin', '12345')]

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}