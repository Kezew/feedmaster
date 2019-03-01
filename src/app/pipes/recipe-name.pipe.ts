import { Pipe, PipeTransform } from "@angular/core";

import { RecipeService } from "../services/recipe.service";

@Pipe({
  name: "recipeName"
})
export class RecipeNamePipe implements PipeTransform {
  constructor(private recipeService: RecipeService) {}

  transform(recipeId: number): any {
    if (recipeId == 0) {
      return "";
    }
    if(this.recipeService.recipes == undefined){
      Promise.all([
        this.recipeService.loadIngredients(),
        this.recipeService.loadRecipes()
      ]).then(() => {
        return this.recipeService.getRecipeById(recipeId).recepieName;

      });
    } else{
      return this.recipeService.getRecipeById(recipeId).recepieName;
    }

  }
}
