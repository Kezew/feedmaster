import { Component, OnInit } from '@angular/core';
import { Group } from '../interfaces/groups';
import { AgeGroup } from '../enums/agegroup.enum';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups: Group[];

  constructor() {

    this.groups = [{
      id: 1,
      name: 'Mókuska csoport',
      subGroups : [{
        id : 1,
        name: 'normál',
        numberOfPersons: 10,
        agegroup : AgeGroup.ONE_TO_THREE,
        allergens: []
      }, {
        id : 2,
        name : "gluténérzékenyek",
        numberOfPersons: 2,
        agegroup : AgeGroup.ONE_TO_THREE,
        allergens: ["glutén"]
      }],
      isOpen : false
    }];
  }

  ngOnInit() {
  }

  openSubGroups(g: Group) {
    g.isOpen = true;
  }

  closeSubGroups(g: Group) {
    g.isOpen = false;
  }

  countTotalNumberOfPersons (g : Group) {
    return 1;
  }

}
