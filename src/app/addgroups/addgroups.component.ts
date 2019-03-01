import { Component, OnInit } from '@angular/core';
import { Group, GroupDisplay, SubGroupDisplay } from '../interfaces/groups';
import { GroupService } from '../services/group.service';
import { AgeGroup } from '../enums/agegroup.enum';
import { Nutrition } from '../enums/nutrition.enum';
import { Router } from '@angular/router';

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
  nutritionDisplayEnum: any[];
  ageEnum: any[];

  constructor(private groupService: GroupService, private router: Router) {
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
    this.nutritionDisplayEnum = this.groupService.getNutritionDisplayArray();
    this.ageEnum = this.groupService.getAgeGroupArray();
  }

  ngOnInit() {
  }

  addGroup() {

    this.group = this.groupService.convertGroupDisplayToGroup(this.groupDisplay);
    this.groupService.postGroup(this.group).then(() => {
      this.router.navigate(['/groups']);
    });

    //TODO adatellenőrzés
  }

  deleteSubgroup(i: number): void {
    this.groupDisplay.subGroups.splice(i, 1);
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

  deleteAllergen(sg: SubGroupDisplay, i: number): void {
    sg.allergens.splice(i, 1);
  }

  addNutrition(sg: SubGroupDisplay): void {
    sg.maxValues.push({
      type: Nutrition.maxDailyEnergyKJ,
      value: 0
    });
  }

  deleteNutrition(sg: SubGroupDisplay, i: number): void {
    sg.maxValues.splice(i, 1);
  }

  trackFn(index: number): number {
    return index;
  }

}
