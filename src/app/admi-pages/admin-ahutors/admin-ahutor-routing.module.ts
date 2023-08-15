import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAhutorsComponent } from './admin-ahutors.component';

const routes: Routes = [
  {
    path:'',
    component:AdminAhutorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAhutorRoutingModule { }
