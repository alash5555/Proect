import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostComponent } from './admin-all-post.component';
const routes: Routes = [
  {
    path:'',
    component:  AdminPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAllPostRoutingModule { }
