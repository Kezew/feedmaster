import { Injectable } from '@angular/core';
import { Menufromserver } from '../interfaces/menufromserver';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService : HttpService) { }

  getMenus() : Promise<Menufromserver[]> {
    return new Promise<Menufromserver[]>((resolve, reject) => {
      this.httpService.get('/menusofuser').then( data => {
        resolve(data);
      }).catch(reject);
    });
  }
}
