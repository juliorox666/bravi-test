import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { MaterialModule } from '@bravi/material';
import { FormsModule } from '@angular/forms';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

@NgModule({
  declarations: [PeopleComponent, PeopleListComponent, PeopleDetailsComponent],
  imports: [CommonModule, PeopleRoutingModule, MaterialModule, FormsModule],
  exports: [PeopleComponent]
})
export class PeopleModule {}
