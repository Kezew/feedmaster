export interface Recipe {
  recepieID: number;
  recepieName: string;
  referencePerson: string;
  ingredients: Ingredient[];
  lastModified: string;
  userOwned: string;
}

export interface Ingredient {
  ingredientId: number;
  ingredientQuantity: number;
}
