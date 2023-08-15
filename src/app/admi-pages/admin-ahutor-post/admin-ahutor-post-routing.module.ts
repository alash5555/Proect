import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAhutorPostComponent } from './admin-ahutor-post.component';

const routes: Routes = [
  {
    path:'',
    component:AdminAhutorPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAhutorPostRoutingModule { }
