import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subgroup-info-modal',
  templateUrl: './subgroup-info-modal.component.html',
  styleUrls: ['./subgroup-info-modal.component.scss']
})
export class SubgroupInfoModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
