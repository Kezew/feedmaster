import { Component, OnInit, Output } from "@angular/core";

import { Recipe } from "src/app/interfaces/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  @Output() currentRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipes = [
      {
        recepieID: 1,
        recepieName: "Boros sör",
        referencePerson: "Alkeszok 1",
        ingredients: [
          {
            ingredientId: 1,
            ingredientQuantity: 300
          },
          {
            ingredientId: 2,
            ingredientQuantity: 100
          }
        ],
        lastModified: "2019-02-22T12:04:42",
        userOwned: "Admin"
      },
      {
        recepieID: 2,
        recepieName: "Sörös bor",
        referencePerson: "Alkeszok 2",
        ingredients: [
          {
            ingredientId: 1,
            ingredientQuantity: 100
          },
          {
            ingredientId: 2,
            ingredientQuantity: 300
          }
        ],
        lastModified: "2019-02-22T12:04:42",
        userOwned: "Admin"
      }
    ];

    this.currentRecipe = this.recipes[0];
  }

  ngOnInit() {
    // this.recipeService.loadIngredients();
  }

  setCurrentRecipe(recipe): void {
    this.currentRecipe = recipe;
  }
}
