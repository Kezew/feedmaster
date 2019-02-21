import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Menu } from '../../interfaces/Menu'
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent implements OnInit {

  public menuData: Menu;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.menuData = {
      name: '',
      items: [
        {
          dayNumber: 1,
          breakfast: [],
          lunch: [],
          dinner: [],
          snack: [],
          ellevenses: [],
        }
      ]
    };
  }

  ngOnInit() {
    console.log(this.router.url.includes('add'));
  }

  addDayColumn() {
    this.menuData.items.push({
      dayNumber: this.menuData.items.length + 1,
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: [],
      ellevenses: []
    });
  }

  deleteColumn(dayNumber) {
    this.menuData.items = this.menuData.items.filter(menuItem => menuItem.dayNumber !== dayNumber);
    this.refreshDayNumbers();
  }

  refreshDayNumbers() {
    this.menuData.items = this.menuData.items.map((item, index) => ({
      ...item,
      dayNumber: index + 1,
    }))
  }
}
