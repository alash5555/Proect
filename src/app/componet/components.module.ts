import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPostComponent } from './about-post/about-post.component';
import { CategoryPostComponent } from './category-post/category-post.component';
import { CategoriMinComponent } from './categori-min/categori-min.component';
import { AllTagsComponent } from './all-tags/all-tags.component';
import { AhutorPostComponent } from './ahutor-post/ahutor-post.component';
import { ReadNextComponent } from './read-next/read-next.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { AllPpostComponent } from './all-ppost/all-ppost.component';
import { AuthorsComponent } from './authors/authors.component';
import { CategoriComponent } from './categori/categori.component';
import { HeadrComponent } from '../Leaut/headr/headr.component';
import { FottofComponent } from '../Leaut/fottof/fottof.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AllPpostComponent,
    AboutPostComponent,
    CategoryPostComponent,
    CategoriMinComponent,
    AllTagsComponent,
    AuthorsComponent,
    AhutorPostComponent,
    ReadNextComponent,
    ViewAllComponent,
    JoinNowComponent,
    AuthorsComponent,
    CategoriComponent,
    HeadrComponent,
    FottofComponent,
  ]
})
export class ComponentsModule {}
