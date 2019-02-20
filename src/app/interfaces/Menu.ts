export interface MenuItem {
  dayNumber: number;
  breakfast: String[];
  lunch: String[];
  dinner: String[];
}

export interface Menu {
  items: MenuItem[]
}
