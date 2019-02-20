import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"]
})
export class RecipeCardComponent implements OnInit {
  ingredients;
  referencePerson;

  constructor() {
    this.ingredients = [
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75],
      ["Zabpehely", 75]
    ];
    this.referencePerson = "Puhatestű-érzékeny 1";
  }

  ngOnInit() {}
}
