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

  constructor(private menuService : MenuService, private router: Router) {
    this.menus = [];
   }

  ngOnInit() {
     this.menuService.getMenus().then( menus => {
       this.menus = menus;
     } );
    this.menus = [
      {
          "menuId": 1,
          "menuName": "Random0",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 2,
          "menuName": "Random1",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 3,
          "menuName": "Random2",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 4,
          "menuName": "Random3",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 5,
          "menuName": "Random4",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 6,
          "menuName": "Random5",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 7,
          "menuName": "Random6",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 8,
          "menuName": "Random7",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 9,
          "menuName": "Random8",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 10,
          "menuName": "Random9",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 11,
          "menuName": "Random10",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 12,
          "menuName": "Random11",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 13,
          "menuName": "Random12",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 14,
          "menuName": "Random13",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 15,
          "menuName": "Random14",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 16,
          "menuName": "Random15",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 17,
          "menuName": "Random16",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 18,
          "menuName": "Random17",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 19,
          "menuName": "Random18",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 20,
          "menuName": "Random19",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 21,
          "menuName": "Random20",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 22,
          "menuName": "Random21",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 23,
          "menuName": "Random22",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 24,
          "menuName": "Random23",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 25,
          "menuName": "Random24",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 26,
          "menuName": "Random25",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 27,
          "menuName": "Random26",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 28,
          "menuName": "Random27",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 29,
          "menuName": "Random28",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 30,
          "menuName": "Random29",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 31,
          "menuName": "Random30",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 32,
          "menuName": "Random31",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 33,
          "menuName": "Random32",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 34,
          "menuName": "Random33",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 35,
          "menuName": "Random34",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 36,
          "menuName": "Random35",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 37,
          "menuName": "Random36",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 38,
          "menuName": "Random37",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 39,
          "menuName": "Random38",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 40,
          "menuName": "Random39",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 41,
          "menuName": "Random40",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 42,
          "menuName": "Random41",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 43,
          "menuName": "Random42",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 44,
          "menuName": "Random43",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 45,
          "menuName": "Random44",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 46,
          "menuName": "Random45",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 47,
          "menuName": "Random46",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 48,
          "menuName": "Random47",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 49,
          "menuName": "Random48",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 50,
          "menuName": "Random49",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 51,
          "menuName": "Random50",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 52,
          "menuName": "Random51",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 53,
          "menuName": "Random52",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 54,
          "menuName": "Random53",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 55,
          "menuName": "Random54",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 56,
          "menuName": "Random55",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 57,
          "menuName": "Random56",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 58,
          "menuName": "Random57",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 59,
          "menuName": "Random58",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 60,
          "menuName": "Random59",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 61,
          "menuName": "Random60",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 62,
          "menuName": "Random61",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 63,
          "menuName": "Random62",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 64,
          "menuName": "Random63",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 65,
          "menuName": "Random64",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 66,
          "menuName": "Random65",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 67,
          "menuName": "Random66",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 68,
          "menuName": "Random67",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 69,
          "menuName": "Random68",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 70,
          "menuName": "Random69",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 71,
          "menuName": "Random70",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 72,
          "menuName": "Random71",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 73,
          "menuName": "Random72",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 74,
          "menuName": "Random73",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 75,
          "menuName": "Random74",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 76,
          "menuName": "Random75",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 77,
          "menuName": "Random76",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 78,
          "menuName": "Random77",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 79,
          "menuName": "Random78",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      },
      {
          "menuId": 80,
          "menuName": "Random79",
          "averageKcalPerDay": 100,
          "lastModified": "2019-02-25T12:12:15",
          "userOwned": "Admin"
      }
  ];
  }

}
