import { Component, OnInit } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  menus : Menu[];

  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.getMenus().then( menus => {
      this.menus = menus;
    } );
  }

}
