import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"]
})
export class RecipeCardComponent implements OnInit {
  data;
  editMode: boolean;

  constructor() {
    this.data = {
      title: "Zabkása",
      ingredients: [
        { name: "Zabpehely", amount: 75 },
        { name: "Zabpehely", amount: 75 },
        { name: "Zabpehely", amount: 75 },
        { name: "Zabpehely", amount: 75 },
        { name: "Zabpehely", amount: 75 },
        { name: "Zabpehely", amount: 75 }
      ],
      nutrition: {
        fat: 2.78,
        saturatedFat: 1.56,
        protein: 4.47,
        carbs: 8.98,
        sugar: 2.79,
        kcal: 70
      },
      referencePerson: "Glutén-érzékeny 1"
    };
  }

  ngOnInit() {}

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  deleteIngredient(ingredient): void {}
}
