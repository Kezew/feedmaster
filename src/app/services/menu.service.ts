import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService : HttpService) { }

  getMenus() : Promise<Menu[]> {
    return new Promise((resolve, reject) => {
      this.httpService.get('menus').then( data => {
        resolve(data);
      } );
    });
  }
}
