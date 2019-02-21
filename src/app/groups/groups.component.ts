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
      subGroups: [{
        id: 1,
        name: 'normál',
        numberOfPersons: 10,
        agegroup: AgeGroup.ONE_TO_THREE,
        allergens: []
      }, {
        id: 2,
        name: "gluténérzékenyek",
        numberOfPersons: 2,
        agegroup: AgeGroup.ONE_TO_THREE,
        allergens: ["glutén"]
      }],
      isOpen: false
    },{
      id: 2,
      name: 'Pillangó csoport',
      subGroups: [{
        id: 1,
        name: 'normál',
        numberOfPersons: 8,
        agegroup: AgeGroup.ONE_TO_THREE,
        allergens: []
      }, {
        id: 2,
        name: "laktózérzékenyek",
        numberOfPersons: 3,
        agegroup: AgeGroup.ONE_TO_THREE,
        allergens: ["laktóz"]
      }],
      isOpen: false
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

  countTotalNumberOfPersons(g: Group) {
    let sum = 0;
    g.subGroups.forEach(sg => {
      sum += sg.numberOfPersons;
    });
    return sum;
  }

}
