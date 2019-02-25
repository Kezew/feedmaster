import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  Output
} from "@angular/core";
import { Recipe, Ingredient, NutritionData } from "src/app/interfaces/recipe";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"]
})
export class RecipeCardComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;
  @Output() data: NutritionData;
  editMode: boolean;
  recipeClone: Recipe;

  constructor(private recipeService: RecipeService) {
    this.resetData();
  }

  ngOnInit() {
    this.calculateNutrition();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  private resetData(): void {
    this.data = {
      fat: 0,
      saturatedFat: 0,
      protein: 0,
      carbs: 0,
      sugar: 0,
      kcal: 0
    };
  }

  private calculateNutrition(): void {
    this.resetData();
    let r: Recipe;
    if (this.editMode) {
      r = this.recipeClone;
    } else {
      r = this.recipe;
    }
    r.ingredients.forEach(e => {
      this.data.fat +=
        this.getIngredient(e.ingredientId).fat * (e.ingredientQuantity / 100);
      this.data.saturatedFat +=
        this.getIngredient(e.ingredientId).saturatedFat *
        (e.ingredientQuantity / 100);
      this.data.protein +=
        this.getIngredient(e.ingredientId).protein *
        (e.ingredientQuantity / 100);
      this.data.carbs +=
        this.getIngredient(e.ingredientId).carbohydrate *
        (e.ingredientQuantity / 100);
      this.data.sugar +=
        this.getIngredient(e.ingredientId).sugar * (e.ingredientQuantity / 100);
      this.data.kcal +=
        this.getIngredient(e.ingredientId).energyKcal *
        (e.ingredientQuantity / 100);
    });
  }

  getIngredient(id): Ingredient {
    return this.recipeService.getIngredientById(id);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.cloneRecipe();
    }
  }

  cloneRecipe(): void {
    this.recipeClone = JSON.parse(JSON.stringify(this.recipe));
  }

  deleteIngredient(id: number): void {
    this.recipeClone.ingredients.find(e => {
      return e.ingredientId === id;
    });
  }
}
