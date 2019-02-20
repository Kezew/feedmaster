export interface MenuItem {
  dayNumber: number;
  breakfast: String[];
  lunch: String[];
  dinner: String[];
  snack: String[];
  ellevenses: String[];
}

export interface Menu {
  items: MenuItem[]
}
