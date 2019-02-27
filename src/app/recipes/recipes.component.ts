import { OnInit, Output, Component } from "@angular/core";

import { Recipe } from "src/app/interfaces/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  @Output() currentRecipe: Recipe;
  searchRecipe: string;
  searchReferencePerson: string;

  constructor(private recipeService: RecipeService) {
    this.searchRecipe = "";
    this.searchReferencePerson = "";
  }

  ngOnInit() {
    // this.recipeService.loadIngredients();
    this.recipes = this.recipeService.recipes;
    this.filteredRecipes = this.recipes.slice(0);
    this.currentRecipe = this.recipes[0];
  }

  refreshList(): void {
    console.log("triggered!");
  }

  setCurrentRecipe(recipe): void {
    this.currentRecipe = recipe;
  }

  filterRecipes(): void {
    const srecipe = this.searchRecipe.toLowerCase();
    const sref = this.searchReferencePerson.toLowerCase();
    this.filteredRecipes = this.recipes.filter(r => {
      return (
        r.recepieName.toLowerCase().indexOf(srecipe) > -1 &&
        r.referencePerson.toLowerCase().indexOf(sref) > -1
      );
    });
  }
}
