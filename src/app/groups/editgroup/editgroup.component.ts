import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/groups';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupDeleteModalComponent } from '../group-delete-modal/group-delete-modal.component';
import { SubgroupDeleteModalComponent } from '../subgroup-delete-modal/subgroup-delete-modal.component';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.scss']
})
export class EditgroupComponent implements OnInit {

  isHeaderEditMode: boolean;
  group: Group;

  constructor(private modalService: NgbModal) {
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

  deleteGroup(){
      this.modalService.open(GroupDeleteModalComponent).result.then();
  }

  deleteSubgroup(){
       this.modalService.open(SubgroupDeleteModalComponent).result.then();
  }

}
