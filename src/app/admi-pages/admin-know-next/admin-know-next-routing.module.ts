import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminKnowNextComponent } from './admin-know-next.component';

const routes: Routes = [
  {
    path:'',
    component:AdminKnowNextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminKnowNextRoutingModule { }
