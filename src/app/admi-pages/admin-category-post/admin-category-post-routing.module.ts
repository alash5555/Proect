import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoryPostComponent } from './admin-category-post.component';

const routes: Routes = [
  {
    path:'',
    component: AdminCategoryPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCategoryPostRoutingModule { }
