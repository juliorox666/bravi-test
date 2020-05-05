import { Component, Input, Output, EventEmitter } from '@angular/core';
import { People } from '@bravi/core-data';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent {
  currentPeople: People;
  originalName;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input()
  set people(value) {
    if (value) this.originalName = value.name;
    this.currentPeople = Object.assign({}, value);
  }
}
