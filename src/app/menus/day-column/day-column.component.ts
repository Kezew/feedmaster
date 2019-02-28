import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem, Mode } from '../../interfaces/menu';
import { NutritionData } from '../../interfaces/recipe';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'day-column',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.scss']
})
export class DayColumnComponent implements OnInit {

  public recipes : Recipe[];

  @Input()
  public mode: Mode;

  @Input()
  public data: MenuItem;

  @Output()
  public deleteColumnEvent: EventEmitter<number>;

  public dayNutrition: NutritionData;

  constructor(private recipeService: RecipeService) {

    this.deleteColumnEvent = new EventEmitter();

  }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    this.calculateDayNutrition();
    // setInterval( () => {
    //   console.log(this.data.lunch);
    // }, 3000 );
  }

  addBreakfast() {
    this.data.breakfastRecipeIDs.push(null);
  }

  addEllevenses() {
    this.data.forenoonSnackRecipeIDs.push(null);
  }

  addLunch() {
    this.data.lunchRecipeIDs.push(null);
  }

  addSnack() {
    this.data.afternoonSnackRecipeIDs.push(null);
  }

  addDinner() {
    this.data.dinnerSnackRecipeIDs.push(null);
  }

  deleteBreakfast(value: number) {
    this.data.breakfastRecipeIDs = this.data.breakfastRecipeIDs.filter(breakfast => breakfast !== value);
    this.calculateDayNutrition();
  }

  deleteEllevenses(value: number) {
    this.data.forenoonSnackRecipeIDs = this.data.forenoonSnackRecipeIDs.filter(ellevenses => ellevenses !== value);
    this.calculateDayNutrition();
  }

  deleteLunch(value: number) {
    this.data.lunchRecipeIDs = this.data.lunchRecipeIDs.filter(lunch => lunch !== value);
    this.calculateDayNutrition();
  }

  deleteSnack(value: number) {
    this.data.afternoonSnackRecipeIDs = this.data.afternoonSnackRecipeIDs.filter(snack => snack !== value);
    this.calculateDayNutrition();
  }

  deleteDinner(value: number) {
    this.data.dinnerSnackRecipeIDs = this.data.dinnerSnackRecipeIDs.filter(dinner => dinner !== value);
    this.calculateDayNutrition();
  }

  deleteColumn() {
    this.deleteColumnEvent.emit(this.data.dayNumber);
  }

  // onChange(event, index) {
  //   this.data.breakfast[index] = event.target.value;
  //   console.log(event);
  // }

  // onChangeEllevenses(event, index) {
  //   this.data.ellevenses[index] = event.target.value;
  // }
  //
  // onChangeLunch(event, index) {
  //   this.data.lunch[index] = event.target.value;
  // }
  //
  // onChangeSnack(event, index) {
  //   this.data.snack[index] = event.target.value;
  // }
  //
  // onChangeDinner(event, index) {
  //   this.data.dinner[index] = event.target.value;
  // }

  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 1 ? []
  //       : this.recipes.filter(v => v.recepieName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )
  //
  // formatter = (x: { recepieName: string }) => x.recepieName;
  //
  // selectedItem(item: NgbTypeaheadSelectItemEvent, index: number) {
  //   console.log(item.item, index);
  //   this.data.breakfast[index] = item.item.recepieID;
  //   console.log(this.data.breakfast);
  // }

  public selectedFn(a: any, b: any) : boolean {
    return a.recepieID == b;
  }

  public trackByFn(index: any, item: any) {
     return index;
  }

  public calculateDayNutrition(): void {
    this.dayNutrition = {
      fat: 0,
      saturatedFat: 0,
      protein: 0,
      carbs: 0,
      sugar: 0,
      kcal: 0
    }

    for (let meal in this.data) {
      if(meal != 'dayNumber'){
        this.data[meal].forEach((e)=>{
          let currentNutritionData = this.recipeService.calculateNutritionById(e);
          this.dayNutrition.fat += currentNutritionData.fat;
          this.dayNutrition.saturatedFat += currentNutritionData.saturatedFat;
          this.dayNutrition.protein += currentNutritionData.protein;
          this.dayNutrition.carbs += currentNutritionData.carbs;
          this.dayNutrition.sugar += currentNutritionData.sugar;
          this.dayNutrition.kcal += currentNutritionData.kcal;

        }
      )
    };
    }
  }

}
