export interface Recipe {
  recepieID: number;
  recepieName: string;
  referencePerson: string;
  ingredients: RecipeIngredient[];
  lastModified: string;
  userOwned: string;
}

export interface RecipeIngredient {
  ingredientId: number;
  ingredientQuantity: number;
}

export interface Ingredient {
  ingredientId: number;
  rawIngredient: boolean;
  ingredientType: string;
  ingredientName: string;
  energyKJ: number;
  energyKcal: number;
  protein: number;
  fat: number;
  saturatedFat: number;
  carbohydrate: number;
  sugar: number;
  glycemicIndex: number;
  fibre: number;
  natrium: number;
  potassium: number;
  calcium: number;
  magnesium: number;
  allergenMilk: boolean;
  allergenGluten: boolean;
  allergenEgg: boolean;
  allergenShellfish: boolean;
  allergenFish: boolean;
  allergenMolluscs: boolean;
  allergenPeanut: boolean;
  allergenWalnut: boolean;
  allergenSesame: boolean;
  allergenSoy: boolean;
  allergenCelery: boolean;
  allergenMustard: boolean;
  allergenSulpithes: boolean;
  allergenLupin: boolean;
  lastModified: string;
  lastModifierName: string;
}

export interface NutritionData {
  fat: number;
  saturatedFat: number;
  protein: number;
  carbs: number;
  sugar: number;
  kcal: number;
}
