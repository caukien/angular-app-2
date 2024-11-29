import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private BaseEndpoint: string =
    'http://test.nghiencuukhoahoc.com.vn/api/app/account/login';

  user: User = new User('', '');

  constructor(private http: HttpClient) {}

  onlogin(loginObj: User): Observable<any> {
    const body = new HttpParams()
      .set('userName', loginObj.username)
      .set('password', loginObj.password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.BaseEndpoint, body.toString(), {
      headers,
    });
  }

  // logout(): void {
  //   this.isAuthenticated = false;
  // }

  // isLoggedIn(): boolean {
  //   return this.isAuthenticated;
  // }
}
