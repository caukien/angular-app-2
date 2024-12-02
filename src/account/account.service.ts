import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root, UserSession } from '../model/account';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
  private BaseEndpoint: string =
    'http://test.nghiencuukhoahoc.com.vn/api/app/account';

  private initHeaders() {
    const accessToken = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }),
    };
  }

  constructor(private http: HttpClient) {}

  getUser(): Observable<Root> {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`,
    });
    return this.http.get<Root>(`${this.BaseEndpoint}/get-account-bootstrap`, {
      headers,
    });
  }

  updateUser(payload: any): Observable<any> {
    return this.http.post(
      `${this.BaseEndpoint}/update-account-info`,
      payload,
      this.initHeaders()
    );
  }
}
