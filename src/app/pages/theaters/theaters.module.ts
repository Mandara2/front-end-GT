import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheatersRoutingModule } from '../theaters/theaters-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    ManageComponent //Esto no debe ir en el app.module.ts
  ],
  imports: [
    CommonModule,
    TheatersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TheatersModule { }
