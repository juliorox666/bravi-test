import { Component, OnInit } from '@angular/core';
import { PeopleService, People } from '@bravi/core-data';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peoples$;
  selectedPeople: People;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.getPeoples();
    this.resetPeople();
  }

  selectPeople(people) {
    this.selectedPeople = people;
  }

  resetPeople() {
    const emptyPeople: People = {
      id: null,
      name: '',
      email: '',
      whatsapp: '',
      phone: ''
    };
    this.selectPeople(emptyPeople);
  }

  getPeoples() {
    this.peoples$ = this.peopleService.all();
  }

  savePeople(people) {
    if (!people.id) {
      this.createPeople(people);
    } else {
      this.updatePeople(people);
    }
  }

  createPeople(people) {
    this.peopleService.create(people).subscribe(result => {
      this.getPeoples();
      this.resetPeople();
    });
  }

  updatePeople(people) {
    this.peopleService.update(people).subscribe(result => {
      this.getPeoples();
      this.resetPeople();
    });
  }

  deletePeople(people) {
    this.peopleService.delete(people.id).subscribe(result => {
      this.getPeoples();
      this.resetPeople();
    });
  }

  cancel() {
    this.selectPeople(undefined);
    this.resetPeople();
  }
}
