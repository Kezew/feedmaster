import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Group, GroupDisplay, SubGroupDisplay } from 'src/app/interfaces/groups';

@Component({
  selector: 'app-subgroup-info-modal',
  templateUrl: './subgroup-info-modal.component.html',
  styleUrls: ['./subgroup-info-modal.component.scss']
})
export class SubgroupInfoModalComponent implements OnInit {

    group: Group;
    groupDisplay: GroupDisplay;
    subgroupD: SubGroupDisplay;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
