import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminReadNextComponent } from './admin-read-next.component';

const routes: Routes = [
  {
    path:'',
    component:AdminReadNextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminReadNextRoutingModule { }
