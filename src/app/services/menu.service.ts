import { Injectable } from '@angular/core';
import { Menufromserver } from '../interfaces/menufromserver';
import { Menu, MenuItem, Day } from '../interfaces/menu';
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

  getMenuById(id:number): Promise<Menu>{
    return new Promise<Menu>((resolve, reject) => {
      this.httpService.get('/menudetails?menuId='+id).then(data => {
        let menu: Menu  = {
          name: '',
          id: 0,
          items: []
        };
        menu.name= data.menuName;
        menu.id = data.menuId;
        for (let key in data.weekDays) {
          menu.items[Day[key.toLowerCase()]] = data.weekDays[key];
          menu.items[Day[key.toLowerCase()]].dayNumber = Day[key.toLowerCase()] +1;
        }
        
        resolve(menu);

      }).catch(reject);
    });
  }
}
