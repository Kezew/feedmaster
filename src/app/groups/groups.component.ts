import { Component, OnInit } from '@angular/core';
import { Group } from '../interfaces/groups';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  subGroups: boolean;
  groupList: Group[];

  constructor() {
    this.subGroups = false;

  }

  ngOnInit() {
  }

  openSubGroups() {
    this.subGroups = true;
  }

  closeSubGroups() {
    this.subGroups = false;
  }

}
