import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Menu, Mode} from '../../interfaces/menu';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent implements OnInit {

  public menuData: Menu;
  public mode: Mode;
  public id: number;
  private cloneMenu : Menu;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.mode = Mode[this.activatedRoute.snapshot.url[1].path];
    this.menuData = {name: '', items: []};
  }

  ngOnInit() {
    this.initMenu();

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

  initMenu(){
    if(this.mode === Mode.add){
      this.addDayColumn();
    } else if(this.mode === Mode.view){
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        //serviceből lekérés id alapján ezután menuData feltöltése a megkapott adatokkal
        this.menuData.name = 'Próba étlap';
        this.menuData.items.push({
          dayNumber: this.menuData.items.length + 1,
          breakfast: ['Vajas kenyér', 'kakaó'],
          lunch: ['Gulyásleves', 'Palacsinta'],
          dinner: [],
          snack: [],
          ellevenses: []
        });

    }
  }

  setMode(mode: string){
    if(mode == Mode.edit){
      this.cloneMenu = JSON.parse(JSON.stringify(this.menuData));
    } else if(mode == Mode.view){
      this.menuData = this.cloneMenu;
    }
    this.mode = Mode[mode];

  }
}
