import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminAhutorsComponent } from './admin-ahutors/admin-ahutors.component';
import { AdminReadNextComponent } from './admin-read-next/admin-read-next.component';
import { AdminPostComponent } from './admin-all-post/admin-all-post.component';
import { AdminKnowNextComponent } from './admin-know-next/admin-know-next.component';
import { AdminCategoryPostComponent } from './admin-category-post/admin-category-post.component';
import { AdminMinCategoryComponent } from './admin-min-category/admin-min-category.component';
import { AdminCatgoryMinPostComponent } from './admin-catgory-min-post/admin-catgory-min-post.component';
import { AdminAhutorPostComponent } from './admin-ahutor-post/admin-ahutor-post.component';
import { AdminAllTagsComponent } from './admin-all-tags/admin-all-tags.component';


@NgModule({
  declarations: [
  
    AdminAllTagsComponent
  ],
  imports: [
    CommonModule, 
    AdminCategoryComponent,
    AdminAhutorsComponent,
    AdminReadNextComponent,
    AdminPostComponent,
    AdminKnowNextComponent,
    AdminCategoryPostComponent,
    AdminMinCategoryComponent,
    AdminCatgoryMinPostComponent,
    AdminAhutorPostComponent,
  ]
})
export class AdminComponetsModule { }
