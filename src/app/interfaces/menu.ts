export interface MenuItem {
  dayNumber: number;
  breakfastRecipeIDs: number[];
  lunchRecipeIDs: number[];
  dinnerSnackRecipeIDs: number[];
  afternoonSnackRecipeIDs: number[];
  forenoonSnackRecipeIDs: number[];
}

export interface Menu {
  name: string;
  description?: string;
  id?: number;
  items?: MenuItem[];
}

export enum Mode{
  add = 'add',
  edit = 'edit',
  view = 'view'
}

export enum Day{
  monday = 0,
  tuesday = 1,
  wednesday = 2,
  thursday = 3,
  friday = 4,
  saturday = 5,
  sunday = 6
}
