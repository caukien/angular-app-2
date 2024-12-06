import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../model/account';
import { District } from '../model/district';

@Injectable()
export class DistrictService {
  private BaseEndpoint: string =
    'http://test.nghiencuukhoahoc.com.vn/api/master-data/tinh';

  // private initHeaders() {
  //   const accessToken = localStorage.getItem('access_token');
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${accessToken}`,
  //     }),
  //   };
  // }

  constructor(private http: HttpClient) {}

  getDistricts(
    skipCount: number = 0,
    maxResultCount: number = 10
  ): Observable<any> {
    const body = {
      filter: '',
      isActive: null,
      skipCount,
      maxResultCount,
    };
    return this.http.post<any>(
      `${this.BaseEndpoint}/get-list`,
      body
      // this.initHeaders()
    );
  }

  createOrUpdate(payload: District): Observable<any> {
    // if (payload.id > 0) {
    //   return this.http.post(
    //     `${this.BaseEndpoint}/create-or-update`,
    //     payload
    //     // this.initHeaders()
    //   );
    // }
    return this.http.post(
      `${this.BaseEndpoint}/create-or-update`,
      payload
      // this.initHeaders()
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.BaseEndpoint}/delete-common-result/${id}`;
    return this.http.post(url, null);
  }

  search(searchObj: any): Observable<any> {
    const payload = {
      ...searchObj,
      isActive: searchObj.isActive === '' ? null : searchObj.isActive,
    };
    return this.http.post<Root>(`${this.BaseEndpoint}/get-list`, searchObj);
  }
}
