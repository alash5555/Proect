import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeautComponent } from './leaut.component';

const routes: Routes = [
  {
    path:"",
    component:LeautComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeautRoutingModule { }
