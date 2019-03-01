import { Component, OnInit } from '@angular/core';
import { Group, SubGroup } from '../interfaces/groups';
import { GroupService } from '../services/group.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupDeleteModalComponent } from './group-delete-modal/group-delete-modal.component';
import { SubgroupInfoModalComponent } from './subgroup-info-modal/subgroup-info-modal.component';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups: Group[];

  constructor(
    private groupService: GroupService,
    private modalService: NgbModal
  ) {

    this.groups = [];

  }

  ngOnInit() {
    this.groupService.getGroups().then(data => {
      this.groups = data;
      this.groupService.groups = data;
      console.log(this.groups)
    });
  }

  openSubGroups(g: Group): void {
    g.isOpen = true;
  }

  closeSubGroups(g: Group): void {
    g.isOpen = false;
  }

  countTotalNumberOfPersons(g: Group): number {
    let sum = 0;
    g.subGroups.forEach(sg => {
      sum += sg.numberOfPersons;
    });
    return sum;
  }

  openInfoModal(subgroup : SubGroup): void {
    const modalRef = this.modalService.open(SubgroupInfoModalComponent);
    modalRef.componentInstance.subgroup = subgroup;
    modalRef.result.then();

  }

  deleteGroup(): void {
    this.modalService.open(GroupDeleteModalComponent).result.then();
  }

}
