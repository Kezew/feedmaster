import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  subGroups: boolean;

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
