import { Component, OnInit } from '@angular/core';
import { Group, GroupDisplay, SubGroupDisplay } from 'src/app/interfaces/groups';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupDeleteModalComponent } from '../group-delete-modal/group-delete-modal.component';
import { SubgroupDeleteModalComponent } from '../subgroup-delete-modal/subgroup-delete-modal.component';
import { AgeGroup } from 'src/app/enums/agegroup.enum';
import { Nutrition } from 'src/app/enums/nutrition.enum';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.scss']
})
export class EditgroupComponent implements OnInit {

  isHeaderEditMode: boolean;
  group: Group;
  groupDisplay: GroupDisplay;


  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private groupService: GroupService
  ) {
    this.isHeaderEditMode = false;

    this.groupDisplay = {
      name: "micimackó",
      subGroups: []
    }
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.group = this.groupService.getGroupById(id);
    this.groupDisplay = this.convertGroupToGroupDisplay(this.group);

  }

  convertGroupToGroupDisplay(g: Group): GroupDisplay {
    let gd: GroupDisplay;
    gd.name = g.name;
    gd.subGroups = [];

    //TODO subgroup [] átalakítás!!!

    return gd;
  }

  convertGroupDisplayToGroup(gd: GroupDisplay): Group {
    let g: Group;
    g.name = gd.name;
    g.subGroups = [];

    //TODO subgroup [] átalakítás!!!

    return g;
  }

  editHeader() {
    this.isHeaderEditMode = true;
  }

  saveHeader() {
    this.isHeaderEditMode = false;
  }

  deleteGroup() {
    this.modalService.open(GroupDeleteModalComponent).result.then();
  }

  deleteSubgroup() {
    this.modalService.open(SubgroupDeleteModalComponent).result.then();
  }

  addSubgroup(): void {
    let sg: SubGroupDisplay;
    sg = {
      name: "",
      numberOfPersons: 0,
      allergens: [],
      maxValues: [],
      agegroup: AgeGroup.ONE_TO_THREE
    }
    this.groupDisplay.subGroups.push(sg);
  }

  addAllergen(sg: SubGroupDisplay): void {
    sg.allergens.push("");
  }

  addNutrition(sg: SubGroupDisplay): void {
    sg.maxValues.push({
      type: Nutrition.maxDailyEnergyKJ,
      value: 0
    })
  }

}
