import { AgeGroup } from '../enums/agegroup.enum';

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
