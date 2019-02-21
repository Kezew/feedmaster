import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/groups';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.scss']
})
export class EditgroupComponent implements OnInit {

  isHeaderEditMode: boolean;
  group: Group;

  constructor() {
    this.isHeaderEditMode = false;
  }

  ngOnInit() {
  }

  editHeader(){
    this.isHeaderEditMode=true;
  }

  saveHeader(){
    this.isHeaderEditMode=false;
  }

}
