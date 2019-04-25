import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Fetch data from url: http://rtq.chicheongweng.com:3000/securities
   */
  fetchData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get<any>('http://rtq.chicheongweng.com:3000/securities', {headers: headers});
  }
}
