import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem, Mode } from '../../interfaces/menu';
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
  constructor(private recipeService: RecipeService) {

    this.deleteColumnEvent = new EventEmitter();
  }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    // setInterval( () => {
    //   console.log(this.data.breakfast);
    // }, 3000 );
  }

  addBreakfast() {
    this.data.breakfast.push(0);
  }

  addEllevenses() {
    this.data.ellevenses.push(0);
  }

  addLunch() {
    this.data.lunch.push(5);
  }

  addSnack() {
    this.data.snack.push(0);
  }

  addDinner() {
    this.data.dinner.push(0);
  }

  deleteBreakfast(value) {
    this.data.breakfast = this.data.breakfast.filter(breakfast => breakfast !== value);
  }

  deleteEllevenses(value) {
    this.data.ellevenses = this.data.ellevenses.filter(ellevenses => ellevenses !== value);
  }

  deleteLunch(value) {
    this.data.lunch = this.data.lunch.filter(lunch => lunch !== value);
  }

  deleteSnack(value) {
    this.data.snack = this.data.snack.filter(snack => snack !== value);
  }

  deleteDinner(value) {
    this.data.dinner = this.data.dinner.filter(dinner => dinner !== value);
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

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.recipes.filter(v => v.recepieName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: { recepieName: string }) => x.recepieName;

  selectedItem(item: NgbTypeaheadSelectItemEvent, index: number) {
    console.log(item.item, index);
    this.data.breakfast[index] = item.item.recepieID;
    console.log(this.data.breakfast);
  }

}
