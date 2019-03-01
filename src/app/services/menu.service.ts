import { Injectable } from '@angular/core';
import { Menufromserver } from '../interfaces/menufromserver';
import { Menu, MenuItem, Day, ServerData } from '../interfaces/menu';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService : HttpService) { }

  public menusofUser: Menufromserver[];

  getMenus() : Promise<Menufromserver[]> {
    return new Promise<Menufromserver[]>((resolve, reject) => {
      this.httpService.get('/menusofuser').then( data => {
        this.menusofUser = data;
        resolve(data);
      }).catch(reject);
    });
  }

  getMenuById(id:number): Promise<Menu>{
    return new Promise<Menu>((resolve, reject) => {
      this.httpService.get('/menudetails?menuId='+id).then(data => {
        let menu = this.createClientData(data);

        resolve(menu);

      }).catch(reject);
    });
  }

  changeMenu(menuCard: Menu): Promise<any>{
    let menu = JSON.parse(JSON.stringify(menuCard));
    let serverData = this.createServerData(menu);

    return this.httpService.put(serverData, '/updatemenu');
  }

  addMenuToServer(menuCard: Menu): Promise<Menu>{
    let menu = JSON.parse(JSON.stringify(menuCard));
    let serverData = this.createServerData(menu);
    return new Promise<Menu>((resolve, reject) => {
      this.httpService.post('/newmenu', serverData).then(data => {
        let menu = this.createClientData(data);

        resolve(menu);

      }).catch(reject);
    });

  }

  createServerData(menu: Menu): object{
    let days:string[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    let serverData = {
      menuId: null,
      menuName: '',
      weekDays: {
         MONDAY: {},
         TUESDAY: {},
         WEDNESDAY: {},
         THURSDAY: {},
         FRIDAY: {},
         SATURDAY: {},
         SUNDAY: {}
      },
      lastModified: '',
      userOwned: ''
    };
    serverData.menuName = menu.name;
    serverData.menuId = menu.id;
    menu.items.forEach((menuItem, index)=> {
      delete menuItem.dayNumber;
      serverData.weekDays[days[index]] = menuItem;
    });
    return serverData;
  }

  createClientData(data: ServerData): Menu{
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

    return menu;
  }
}
