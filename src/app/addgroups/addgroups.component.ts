import { Component, OnInit } from '@angular/core';
import { Group, GroupDisplay, SubGroupDisplay } from '../interfaces/groups';
import { GroupService } from '../services/group.service';
import { AgeGroup } from '../enums/agegroup.enum';
import { SubgroupDeleteModalComponent } from '../groups/subgroup-delete-modal/subgroup-delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Nutrition } from '../enums/nutrition.enum';

@Component({
  selector: 'app-addgroups',
  templateUrl: './addgroups.component.html',
  styleUrls: ['./addgroups.component.scss']
})
export class AddgroupsComponent implements OnInit {

  group: Group;
  groupDisplay: GroupDisplay;
  allergenEnum: any[];
  nutritionEnum: any[];
  ageEnum: any[];

  constructor(private modalService: NgbModal, private groupService: GroupService) {
    let sg: SubGroupDisplay;
    sg = {
      name: "",
      numberOfPersons: 0,
      allergens: [],
      maxValues: [],
      agegroup: AgeGroup.ONE_TO_THREE
    }

    this.groupDisplay = {
      name: "",
      subGroups: []
    }
    this.groupDisplay.subGroups.push(sg);

    this.allergenEnum = this.groupService.getAllergenArray();
    this.nutritionEnum = this.groupService.getNutritionArray();
    this.ageEnum = this.groupService.getAgeGroupArray();
  }

  ngOnInit() {
  }

  deleteSubgroup() {
    this.modalService.open(SubgroupDeleteModalComponent).result.then();
    //TODO
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

  deleteAllergen(sg: SubGroupDisplay, i: number) {
    sg.allergens.splice(i, 1);
  }

  addNutrition(sg: SubGroupDisplay): void {
    sg.maxValues.push({
      type: Nutrition.maxDailyEnergyKJ,
      value: 0
    })
  }

  deleteNutrition(sg: SubGroupDisplay, i: number) {
    sg.maxValues.splice(i, 1);
  }

}
