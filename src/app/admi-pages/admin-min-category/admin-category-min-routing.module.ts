import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoryMinModule } from './admin-category-min.module';
import { AdminMinCategoryComponent } from './admin-min-category.component';

const routes: Routes = [
  {
    path:'',
    component: AdminMinCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCategoryMinRoutingModule { }
