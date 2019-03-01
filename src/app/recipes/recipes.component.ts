import {
  OnInit,
  Output,
  Component,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

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
  @Output() editMode: boolean;
  searchRecipe: string;
  searchReferencePerson: string;
  isDataLoaded: boolean;

  constructor(private recipeService: RecipeService) {
    this.searchRecipe = "";
    this.searchReferencePerson = "";
    this.isDataLoaded = false;
    this.editMode = false;
  }

  ngOnInit() {
    const loadPromise = Promise.all([
      this.recipeService.loadIngredients(),
      this.recipeService.loadRecipes()
    ]);
    loadPromise.then(() => {
      this.recipes = this.recipeService.recipes;
      this.filteredRecipes = this.recipes.slice(0);
      this.currentRecipe = this.recipes[0];
      this.isDataLoaded = true;
    });
  }

  refreshList(): void {
    this.recipes = this.recipeService.recipes;
    this.filteredRecipes = this.recipes;
    this.currentRecipe = this.recipeService.getRecipeById(
      this.currentRecipe.recepieID
    );
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

  newRecipe(): void {
    let newRecipe: Recipe;
    newRecipe = {
      recepieID: null,
      recepieName: "Új étel",
      referencePerson: "Referencia személy",
      ingredients: [{ ingredientId: null, ingredientQuantity: null }],
      lastModified: null,
      userOwned: null
    };
    this.editMode = true;
    this.currentRecipe = newRecipe;
  }
}
