import { Injectable } from "@angular/core";

import { HttpService } from "./http.service";
import { Ingredient, Recipe, NutritionData } from "../interfaces/recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  ingredients: Ingredient[];
  recipes: Recipe[];

  constructor(private httpService: HttpService) {}

  loadIngredients(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.httpService
        .get("/ingredients")
        .then(data => {
          this.ingredients = data;
          resolve();
        })
        .catch(reject);
    });
  }

  loadRecipes(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.httpService
        .get("/recipes")
        .then(data => {
          this.recipes = data;
          resolve();
        })
        .catch(reject);
    });
  }

  modifyRecipe(newRecipe: Recipe): Promise<Recipe> {
    return new Promise<Recipe>((resolve, reject) => {
      this.httpService
        .put("/updaterecipe", newRecipe)
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(reject);
    });
  }

  getIngredientById(id: number): Ingredient {
    return this.ingredients.find(e => {
      return e.ingredientId === id;
    });
  }

  getRecipeById(id: number): Recipe {
    for (let r of this.recipes) {
      if (r.recepieID === id) {
        return r;
      }
    }
    // TODO hibakezelés
  }

  setRecipe(newRecipe: Recipe): void {
    let idx = -1;
    this.recipes.forEach((e, i) => {
      if (e.recepieID === newRecipe.recepieID) {
        idx = i;
      }
    });
    this.recipes[idx] = newRecipe;
  }

  addRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
  }

  calculateNutrition(recipe: Recipe): NutritionData {
    let data: NutritionData;
    data = {
      fat: 0,
      saturatedFat: 0,
      protein: 0,
      carbs: 0,
      sugar: 0,
      kcal: 0
    };

    recipe.ingredients.forEach(e => {
      data.fat +=
        this.getIngredientById(e.ingredientId).fat *
        (e.ingredientQuantity / 100);
      data.saturatedFat +=
        this.getIngredientById(e.ingredientId).saturatedFat *
        (e.ingredientQuantity / 100);
      data.protein +=
        this.getIngredientById(e.ingredientId).protein *
        (e.ingredientQuantity / 100);
      data.carbs +=
        this.getIngredientById(e.ingredientId).carbohydrate *
        (e.ingredientQuantity / 100);
      data.sugar +=
        this.getIngredientById(e.ingredientId).sugar *
        (e.ingredientQuantity / 100);
      data.kcal +=
        this.getIngredientById(e.ingredientId).energyKcal *
        (e.ingredientQuantity / 100);
    });

    return data;
  }

  calculateNutritionById(id: number): NutritionData {
    const r = this.getRecipeById(id);
    return this.calculateNutrition(r);
  }
}
