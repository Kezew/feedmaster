export interface MenuItem {
  dayNumber: number;
  breakfastRecipeIDs: number[];
  lunchRecipeIDs: number[];
  dinnerSnackRecipeIDs: number[];
  afternoonSnackRecipeIDs: number[];
  forenoonSnackRecipeIDs: number[];
}

export interface Menu {
  name: String;
  description?: String;
  id?: number;
  items?: MenuItem[];
}

export enum Mode{
  add = 'add',
  edit = 'edit',
  view = 'view'
}

export enum Day{
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
  sunday = 7
}
