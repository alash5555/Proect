import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoryComponent } from '../admin-category/admin-category.component';
import { AdminCategoryMinPostModule } from './admin-category-min-post.module';
import { AdminCatgoryMinPostComponent } from './admin-catgory-min-post.component';

const routes: Routes = [
  {
    path:'',
    component: AdminCatgoryMinPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCategoryMinPostRoutingModule { }
