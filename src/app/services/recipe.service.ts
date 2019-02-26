import { Injectable } from "@angular/core";

import { HttpService } from "./http.service";
import { Ingredient, Recipe } from "../interfaces/recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  ingredients: Ingredient[];
  recipes: Recipe[];

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
    this.recipes = [
      {
        recepieID: 5,
        recepieName: "Random Recept 000",
        referencePerson: "Reference person 0",
        ingredients: [
          {
            ingredientId: 106,
            ingredientQuantity: 102.2037286264005
          },
          {
            ingredientId: 74,
            ingredientQuantity: 6.161488987427121
          },
          {
            ingredientId: 171,
            ingredientQuantity: 102.85632158540491
          },
          {
            ingredientId: 8,
            ingredientQuantity: 58.99043482690451
          }
        ],
        lastModified: "2019-02-22T10:02:49",
        userOwned: "Admin"
      },
      {
        recepieID: 8,
        recepieName: "Random Recept 111",
        referencePerson: "Reference person 1",
        ingredients: [
          {
            ingredientId: 68,
            ingredientQuantity: 122.99772123252772
          },
          {
            ingredientId: 159,
            ingredientQuantity: 4.2666169886609975
          },
          {
            ingredientId: 177,
            ingredientQuantity: 140.87370486792022
          },
          {
            ingredientId: 151,
            ingredientQuantity: 195.6529414670527
          }
        ],
        lastModified: "2019-02-22T10:02:49",
        userOwned: "Admin"
      }
    ];
  }

  loadIngredients(): void {
    this.httpService.get("/ingredients").then(data => {
      this.ingredients = data;
    });
  }

  getIngredientById(id: number): Ingredient {
    return this.ingredients.find(e => {
      return e.ingredientId === id;
    });
  }

  getRecipeById(id: number): Recipe {
    for (let r of this.recipes) {
      if (r.recepieID == id) {
        return r;
      }
    }
    // TODO hibakezelés
  }
}
