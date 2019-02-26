import { Pipe, PipeTransform } from '@angular/core';

import { RecipeService } from '../services/recipe.service';

@Pipe({
  name: 'recipeName'
})
export class RecipeNamePipe implements PipeTransform {

  constructor(private recipeService: RecipeService) {
  }

  transform(recipeId: number): any {
    if(recipeId==0){
      return '';
    }
    return this.recipeService.getRecipeById(recipeId).recepieName;
  }

}
