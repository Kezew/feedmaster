import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private recipeService: RecipeService ) {

   }

  ngOnInit() {
    this.recipeService.loadIngredients();
    this.recipeService.loadRecipes();
  }

}
