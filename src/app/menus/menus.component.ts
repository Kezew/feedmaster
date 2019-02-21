import { Component, OnInit } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { MenuService } from '../services/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  menus : Menu[];

  constructor(private menuService : MenuService, private router: Router) { }

  ngOnInit() {
    // this.menuService.getMenus().then( menus => {
    //   this.menus = menus;
    // } );
    this.menus = [{name: "Próba étlap", id: 1}];
  }

}
