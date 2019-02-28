import { Injectable } from '@angular/core';
import { Menufromserver } from '../interfaces/menufromserver';
import { Menu, MenuItem } from '../interfaces/menu';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService : HttpService) { }

  getMenus() : Promise<Menufromserver[]> {
    return new Promise<Menufromserver[]>((resolve, reject) => {
      this.httpService.get('menusofuser').then( data => {
        resolve(data);
      }).catch(reject);
    });
  }

  // getMenuById(id:number): Promise<Menu>{
  //   return new Promise<Menu>((resolve, reject) => {
  //     this.httpService.get('/menudetails?menuId='+id).then(data => {
  //       let menu: Menu{}  = {};
  //       menu.name= data.menuName;
  //       menu.id = data.menuId;
  //       for (let key in data.weekDays) {
  //
  //       }
  //
  //     }).catch(reject);
  //   });
  // }
}
