import { Injectable } from "@angular/core";

import { HttpService } from "./http.service";
import { Ingredient, Recipe, NutritionData } from "../interfaces/recipe";

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
      },
      {
        recepieID: 9,
        recepieName: "Random Recept 222",
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
      },
      {
        recepieID: 7,
        recepieName: "Random Recept 333",
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
      },
      {
        recepieID: 6,
        recepieName: "Random Recept 444",
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
      }];
  }

  loadIngredients(): void {
    this.httpService.get("/ingredients").then(data => {
      this.ingredients = data;
    });
  }

  loadRecipes(): void {
    this.httpService.get("/recipes").then(data => {
      this.recipes = data;
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
