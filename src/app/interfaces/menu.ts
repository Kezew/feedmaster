export interface MenuItem {
  dayNumber: number;
  breakfast: number[];
  lunch: number[];
  dinner: number[];
  snack: number[];
  ellevenses: number[];
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
