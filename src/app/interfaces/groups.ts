export interface SubGroup {
  id?: number;
  name: string;
  numberOfPersons: number;
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
  allergens: string[];
}

export interface Group {
  id?: number;
  name: string;
  subGroups: SubGroup[];
}
