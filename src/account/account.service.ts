import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root, UserSession } from '../model/account';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
  private BaseEndpoint: string =
    'http://test.nghiencuukhoahoc.com.vn/api/app/account/get-account-bootstrap';

  constructor(private http: HttpClient) {}

  getUser(): Observable<Root> {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`,
    });
    return this.http.get<Root>(this.BaseEndpoint, { headers });
  }

  updateUser(payload: any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });

    const updateEndpoint =
      'http://test.nghiencuukhoahoc.com.vn/api/app/account/update-account-info';
    return this.http.post(updateEndpoint, payload, { headers });
  }
}
