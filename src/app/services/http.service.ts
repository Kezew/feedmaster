import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly SERVER_URL = "localhost:5000";

  constructor(private http: HttpClient) { }

  get(url: string) : Promise<any> {
    return this.http.get(this.SERVER_URL + url, { withCredentials: true }).toPromise();
  }
}
