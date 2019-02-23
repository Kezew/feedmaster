import { Injectable } from '@angular/core';
import { Group, SubGroup } from '../interfaces/groups';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpService: HttpService) { }

  getGroups(): Promise<Group[]> {
    return new Promise((resolve, reject) => {
      this.httpService.get("/groupsofuser/1?userId=1").then(data => {
        resolve(this.convertGroups(data));
      });
    });
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

}
