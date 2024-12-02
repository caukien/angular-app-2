import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../model/account';

@Injectable()
export class CommuneService {
  private BaseEndpoint: string =
    'http://test.nghiencuukhoahoc.com.vn/api/master-data/xa';

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

  getCommune(): Observable<any> {
    const body = {
      filter: null,
      isActive: null,
      skipCount: 0,
      maTinh: '',
      maxResultCount: 10,
    };
    return this.http.post<Root>(
      `${this.BaseEndpoint}/get-list`,
      body,
      this.initHeaders()
    );
  }

  createOrUpdate(payload: any): Observable<any> {
    return this.http.post(
      `${this.BaseEndpoint}/create-or-update`,
      payload,
      this.initHeaders()
    );
  }
}