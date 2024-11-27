import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from '../theaters/manage/manage.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"create", component:ManageComponent},
  {path:"list/:theaterId", component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatsRoutingModule {
}
