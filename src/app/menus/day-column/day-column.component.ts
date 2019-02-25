import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MenuItem, Mode } from '../../interfaces/menu';

@Component({
  selector: 'day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.scss']
})
export class DayColumnComponent implements OnInit {
  private recipes = [
    {
      recepieID: 1,
      recepieName: "Random Recept 0",
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
      recepieID: 2,
      recepieName: "Random Recept 1",
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

  @Input()
  public mode: Mode;

  @Input()
  public data: MenuItem;

  @Output()
  public deleteColumnEvent: EventEmitter<number>;
  constructor() {

    this.deleteColumnEvent = new EventEmitter();
  }

  ngOnInit() {

  }

  addBreakfast() {
    this.data.breakfast.push(0);
  }

  addEllevenses() {
    this.data.ellevenses.push(0);
  }

  addLunch() {
    this.data.lunch.push(0);
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

  onChangeEllevenses(event, index) {
    this.data.ellevenses[index] = event.target.value;
  }

  onChangeLunch(event, index) {
    this.data.lunch[index] = event.target.value;
  }

  onChangeSnack(event, index) {
    this.data.snack[index] = event.target.value;
  }

  onChangeDinner(event, index) {
    this.data.dinner[index] = event.target.value;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.recipes.filter(v => v.recepieName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: { recepieName: string }) => x.recepieName;
  
  selectedItem(item, index) {
    this.data.breakfast[index] = item.item.recepieID;

  }

}
