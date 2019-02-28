import { Injectable } from '@angular/core';
import { Group, SubGroup, GroupDisplay, SubGroupDisplay, MaxValue } from '../interfaces/groups';
import { HttpService } from './http.service';
import { Nutrition } from '../enums/nutrition.enum';
import { Allergen } from '../enums/allergen.enum';
import { AgeGroup } from '../enums/agegroup.enum';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: Group[];

  constructor(private httpService: HttpService) {
  }

  getGroups(): Promise<Group[]> {
    return new Promise((resolve, reject) => {
      this.httpService.get("/groupsofuser").then(data => {
        resolve(this.convertGroups(data));
      });
    });
  }

  postGroup() {
      //TODO
  }

  


  private convertGroups(data: any[]): Group[] {
    let groups: Group[] = [];
    for (let i = 0; i < data.length; i++) {

      let g: Group;
      g.id = data[i].mainGroupId;
      g.name = data[i].groupName;

      let gs: SubGroup;
      gs.id = data[i].mainGroupId;
      gs.name = data[i].subGroupName;
      gs.numberOfPersons = data[i].numberOfPersons;
      gs.agegroup = data[i].ageGroup;
      gs.maxDailyEnergyKJ = data[i].maxDailyEnergyKJ;
      gs.maxDailyEnergyKcal = data[i].maxDailyEnergyKcal;
      gs.maxDailyProtein = data[i].maxDailyProtein;
      gs.maxDailyFat = data[i].maxDailyFat;
      gs.maxDailySaturatedFat = data[i].maxDailySaturatedFat;
      gs.maxDailyCarbohydrate = data[i].maxDailyCarbohydrate;
      gs.maxDailySugar = data[i].maxDailySugar;
      gs.maxGlycemIndexPerMeal = data[i].maxGlycemIndexPerMeal;
      gs.maxDailyFibre = data[i].maxDailyFibre;
      gs.maxDailyNatrium = data[i].maxDailyNatrium;
      gs.maxDailyPotassium = data[i].maxDailyPotassium;
      gs.maxDailyCalcium = data[i].maxDailyCalcium;
      gs.maxDailyMagnesium = data[i].maxDailyMagnesium;

      for (let j = 0; j < data[i].allergens.length; j++) {
        gs.allergens.push(data[i].allergens[j].allergen);
      }

      let flag = false;
      groups.forEach(group => {
        if (group.id === data[i].mainGroupId) {
          flag = true;
          group.subGroups.push(gs);
        }
      });

      if (!flag) {
        g.subGroups.push(gs);
        groups.push(g);
      }
    }
    return groups;
  }

  getGroupById(id: number): Group {
    let g: Group;
    for (let i = 0; i < this.groups.length; i++) {
      g = this.groups[i];
      if (g.id === id) {
        break;
      }
    }
    return g;
  }

  convertGroupToGroupDisplay(g: Group): GroupDisplay {
    let gd: GroupDisplay = {
      name: g.name,
      subGroups: []
    };

    for (let i = 0; i < g.subGroups.length; i++) {
      let sg = g.subGroups[i];
      let sgdMaxValues: MaxValue[] = [];

      if (sg.maxDailyEnergyKJ) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyEnergyKJ,
          value: sg.maxDailyEnergyKJ
        });
      }
      if (sg.maxDailyEnergyKcal) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyEnergyKcal,
          value: sg.maxDailyEnergyKcal
        });
      }
      if (sg.maxDailyProtein) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyProtein,
          value: sg.maxDailyProtein
        });
      }
      if (sg.maxDailyFat) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyFat,
          value: sg.maxDailyFat
        });
      }
      if (sg.maxDailySaturatedFat) {
        sgdMaxValues.push({
          type: Nutrition.maxDailySaturatedFat,
          value: sg.maxDailySaturatedFat
        });
      }
      if (sg.maxDailyCarbohydrate) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyCarbohydrate,
          value: sg.maxDailyCarbohydrate
        });
      }
      if (sg.maxDailySugar) {
        sgdMaxValues.push({
          type: Nutrition.maxDailySugar,
          value: sg.maxDailySugar
        });
      }
      if (sg.maxGlycemIndexPerMeal) {
        sgdMaxValues.push({
          type: Nutrition.maxGlycemicIndexPerMeal,
          value: sg.maxGlycemIndexPerMeal
        });
      }
      if (sg.maxDailyFibre) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyFibre,
          value: sg.maxDailyFibre
        });
      }
      if (sg.maxDailyNatrium) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyNatrium,
          value: sg.maxDailyNatrium
        });
      }
      if (sg.maxDailyPotassium) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyPotassium,
          value: sg.maxDailyPotassium
        });
      }
      if (sg.maxDailyCalcium) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyCalcium,
          value: sg.maxDailyCalcium
        });
      }
      if (sg.maxDailyMagnesium) {
        sgdMaxValues.push({
          type: Nutrition.maxDailyMagnesium,
          value: sg.maxDailyMagnesium
        });
      }

      let sgd: SubGroupDisplay = {
        name: sg.name,
        numberOfPersons: sg.numberOfPersons,
        allergens: sg.allergens,
        maxValues: sgdMaxValues,
        agegroup: sg.agegroup
      };
      gd.subGroups.push(sgd);
    }
    return gd;
  }

  convertGroupDisplayToGroup(gd: GroupDisplay): Group {
    let g: Group;
    g.name = gd.name;
    g.subGroups = [];

    //TODO subgroup [] átalakítás!!!

    return g;
  }

  getAllergenArray(): any[] {
    const enumKeys = Object.keys(Allergen);
    const allergenEnum = [];
    for (let enumKey of enumKeys) {
      allergenEnum.push({ key: enumKey, value: Allergen[enumKey] });
    }
    return allergenEnum;
  }

  getNutritionArray(): any[] {
    const enumKeys = Object.keys(Nutrition);
    const nutritionEnum = [];
    for (let enumKey of enumKeys) {
      nutritionEnum.push({ key: enumKey, value: Nutrition[enumKey] });
    }
    return nutritionEnum;
  }

  getAgeGroupArray(): any[] {
    const enumKeys = Object.keys(AgeGroup);
    const ageEnum = [];
    for (let enumKey of enumKeys) {
      ageEnum.push({ key: enumKey, value: AgeGroup[enumKey] });
    }
    return ageEnum;
  }

}
