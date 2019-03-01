import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubGroup } from 'src/app/interfaces/groups';

@Component({
  selector: 'app-subgroup-info-modal',
  templateUrl: './subgroup-info-modal.component.html',
  styleUrls: ['./subgroup-info-modal.component.scss']
})
export class SubgroupInfoModalComponent implements OnInit {

  subgroup: SubGroup;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
