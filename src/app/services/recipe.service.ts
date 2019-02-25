import { Injectable } from "@angular/core";

import { HttpService } from "./http.service";
import { Ingredient } from "../interfaces/recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  ingredients: Ingredient[];

  constructor(private httpService: HttpService) {
    this.ingredients = [
      {
        ingredientId: 1,
        rawIngredient: true,
        ingredientType: "ALCOHOLS",
        ingredientName: "barnasör",
        energyKJ: 214,
        energyKcal: 51,
        protein: 1,
        fat: 0,
        saturatedFat: 0,
        carbohydrate: 5.9,
        sugar: 0,
        glycemicIndex: 7,
        fibre: 0,
        natrium: 0.003,
        potassium: 0.05,
        calcium: 0.003,
        magnesium: 0,
        allergenMilk: false,
        allergenGluten: false,
        allergenEgg: false,
        allergenShellfish: false,
        allergenFish: false,
        allergenMolluscs: false,
        allergenPeanut: false,
        allergenWalnut: false,
        allergenSesame: false,
        allergenSoy: false,
        allergenCelery: false,
        allergenMustard: false,
        allergenSulpithes: true,
        allergenLupin: false,
        lastModified: "2019-02-22T12:04:40",
        lastModifierName: "Admin"
      },
      {
        ingredientId: 2,
        rawIngredient: true,
        ingredientType: "ALCOHOLS",
        ingredientName: "fehérbor",
        energyKJ: 315,
        energyKcal: 75,
        protein: 1.5,
        fat: 0,
        saturatedFat: 0,
        carbohydrate: 3,
        sugar: 0,
        glycemicIndex: 3,
        fibre: 0,
        natrium: 0.002,
        potassium: 0.082,
        calcium: 0.009,
        magnesium: 0.01,
        allergenMilk: false,
        allergenGluten: false,
        allergenEgg: false,
        allergenShellfish: false,
        allergenFish: false,
        allergenMolluscs: false,
        allergenPeanut: false,
        allergenWalnut: false,
        allergenSesame: false,
        allergenSoy: false,
        allergenCelery: false,
        allergenMustard: false,
        allergenSulpithes: true,
        allergenLupin: false,
        lastModified: "2019-02-22T12:04:40",
        lastModifierName: "Admin"
      }
    ];
  }

  loadIngredients(): void {
    this.httpService.get("ingredients").then(data => {
      this.ingredients = data;
    });
  }

  getIngredientById(id: number): Ingredient {
    return this.ingredients.find(e => {
      return e.ingredientId === id;
    });
  }
}
