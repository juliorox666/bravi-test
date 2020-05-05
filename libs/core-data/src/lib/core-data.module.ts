import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people/people.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PeopleService]
})
export class CoreDataModule {}
