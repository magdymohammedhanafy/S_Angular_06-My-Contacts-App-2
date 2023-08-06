import { Component, EventEmitter, Output } from '@angular/core';
import { Filtration } from '../models/filtration';

@Component({
  selector: 'app-filtration-component',
  templateUrl: './filtration-component.component.html',
  styleUrls: ['./filtration-component.component.scss'],
})
export class FiltrationComponentComponent {
  selectors?: Filtration[];
  selection: number = 0;
  @Output()
  selectedValue!: EventEmitter<number>;
  @Output()
  searching!: EventEmitter<String>;
  constructor() {
    this.selectedValue = new EventEmitter<number>();
    this.searching = new EventEmitter<String>();
    this.selectors = [
      { title: 'Filtration by contact name ', id: 1 },
      { title: 'Filtration by contact number ', id: 2 },
    ];
  }
  myFunction(val: any) {
    this.selectedValue.emit(val);
  }
  clickOnSearch(searchValue: String) {
    this.searching.emit(searchValue);
  }
}
