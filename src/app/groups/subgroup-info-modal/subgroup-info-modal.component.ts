import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubGroup, SubGroupDisplay } from 'src/app/interfaces/groups';

@Component({
  selector: 'app-subgroup-info-modal',
  templateUrl: './subgroup-info-modal.component.html',
  styleUrls: ['./subgroup-info-modal.component.scss']
})
export class SubgroupInfoModalComponent implements OnInit {

  subgroup: SubGroup;
  subgDisplay: SubGroupDisplay

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
