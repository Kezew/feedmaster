import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly SERVER_URL = "https://mysterious-journey-60687.herokuapp.com";

  constructor(private http: HttpClient) { }

  get(url: string) : Promise<any> {
    return this.http.get(this.SERVER_URL + url, { withCredentials: true }).toPromise();
  }

  post(url: string, data: any) : Promise<any> {
    return this.http.post(this.SERVER_URL + url, data, { withCredentials: true }).toPromise();
  }

  postFormData(url: string, data: any) : Promise<any> {
    let fd = new FormData();
    let keys = Object.keys(data);
    for(let key of keys) {
      fd.append(key, data[key]);
    }
    return this.http.post(this.SERVER_URL + url, fd, { withCredentials: true }).toPromise();
  }
}
