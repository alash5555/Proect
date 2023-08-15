import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhutorComponent } from './ahutor.component';

const routes: Routes = [
  {
    path:"",
    component:AhutorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhutorRoutingModule { }
