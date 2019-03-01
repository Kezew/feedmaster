import { Component, OnInit } from '@angular/core';
import { Menufromserver } from '../interfaces/menufromserver';
import { MenuService } from '../services/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  menus : Menufromserver[];
  isLoading : boolean;

  constructor(private menuService : MenuService, private router: Router) {
    this.menus = [];
    this.isLoading = true;
   }

  ngOnInit() {
    if(this.menuService.menusofUser == undefined){
      this.menuService.getMenus().then( menus => {
        this.menus = menus;
        this.isLoading = false;
      } );
    } else{
      this.menus = this.menuService.menusofUser;
      this.isLoading = false;
    }


  }

}
