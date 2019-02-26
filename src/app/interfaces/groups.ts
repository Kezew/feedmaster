import { AgeGroup } from '../enums/agegroup.enum';
import { Nutrition } from '../enums/nutrition.enum';

export interface SubGroup {
  id?: number;

  name: string;
  numberOfPersons: number;
  allergens: string[];
  agegroup: AgeGroup;

  maxDailyEnergyKJ?: number;
  maxDailyEnergyKcal?: number;
  maxDailyProtein?: number;
  maxDailyFat?: number;
  maxDailySaturatedFat?: number;
  maxDailyCarbohydrate?: number;
  maxDailySugar?: number;
  maxGlycemIndexPerMeal?: number;
  maxDailyFibre?: number;
  maxDailyNatrium?: number;
  maxDailyPotassium?: number;
  maxDailyCalcium?: number;
  maxDailyMagnesium?: number;
}

export interface Group {
  id?: number;
  name: string;
  subGroups: SubGroup[];
  isOpen?: boolean;
}

export interface maxValue {
    type: Nutrition;
    value: number;
}


export interface SubGroupDisplay {
    name: string;
    numberOfPersons: number;
    allergens: string[];
    maxValues: maxValue[];
    agegroup: AgeGroup;
}

export interface GroupDisplay {
    name: string;
    subGroups: SubGroupDisplay[];
}
