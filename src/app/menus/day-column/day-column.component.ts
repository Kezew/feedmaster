import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MenuItem } from '../../interfaces/Menu';

@Component({
  selector: 'day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.scss']
})
export class DayColumnComponent implements OnInit {
  public states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois'];
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
    this.data.breakfast.push('');
  }

  addLunch() {
    this.data.lunch.push('');
  }

  addDinner() {
    this.data.dinner.push('');
  }

  deleteBreakfast(value) {
    this.data.breakfast = this.data.breakfast.filter(breakfast => breakfast !== value);
  }

  deleteLunch(value) {
    this.data.lunch = this.data.lunch.filter(lunch => lunch !== value);
  }

  deleteDinner(value) {
    this.data.dinner = this.data.dinner.filter(dinner => dinner !== value);
  }

  deleteColumn() {
    this.deleteColumnEvent.emit(this.data.dayNumber);
  }


  onChange(event, index) {
    this.data.breakfast[index] = event.target.value;
  }

  onChangeLunch(event, index) {
    this.data.lunch[index] = event.target.value;
  }

  onChangeDinner(event, index) {
    this.data.dinner[index] = event.target.value;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


}