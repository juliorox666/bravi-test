import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = `http://localhost:3000`;

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  model = 'people';

  constructor(private httpClient: HttpClient) {}

  getUrl(id = false) {
    return id ? `${BASE_URL}/${this.model}/${id}` : `${BASE_URL}/${this.model}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(people) {
    return this.httpClient.post(this.getUrl(), people);
  }

  update(people) {
    return this.httpClient.patch(this.getUrl(people.id), people);
  }

  delete(peopleId) {
    return this.httpClient.delete(this.getUrl(peopleId));
  }
}
