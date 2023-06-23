;
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadrComponent } from './Leaut/headr/headr.component';
import { LeautComponent } from './Leaut/leaut/leaut.component';
import { FottofComponent } from './Leaut/fottof/fottof.component';
import { HomeComponent } from './Pages/home/home.component';
import { CategoriComponent } from './componet/categori/categori.component';
import { AuthorsComponent } from './componet/authors/authors.component';
import { JoinNowComponent } from './componet/join-now/join-now.component';
import { Route, RouterModule } from '@angular/router';
import { BlogComponent } from './Pages/blog/blog.component';
import { AllPpostComponent } from './componet/all-ppost/all-ppost.component';
import { BlogPostComponent } from './Pages/blog-post/blog-post.component';
import { ReadNextComponent } from './componet/read-next/read-next.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ViewAllComponent } from './componet/view-all/view-all.component';
import { CategoryComponent } from './Pages/category/category.component';
import { CategoryPostComponent } from './componet/category-post/category-post.component';
import { CategoriMinComponent } from './componet/categori-min/categori-min.component';
import { AllTagsComponent } from './componet/all-tags/all-tags.component';
import { AhutorComponent } from './Pages/ahutor/ahutor.component';
import { AhutorPostComponent } from './componet/ahutor-post/ahutor-post.component';
import { ContactComponent } from './Pages/contact/contact.component';

const route:Route[]=[
  {
    path:'leaut',
    component:  LeautComponent,
    children:[
      {
        path:"home",
        component: HomeComponent
      },
      {
        path:'blog',
        component: BlogComponent
      },
      {
        path:'blog-post',
        component: BlogPostComponent
      },
      {
        path:"about-us",
        component: AboutUsComponent
      },
      {
        path:"category",
        component:  CategoryComponent,
      },
      {
        path:"ahutor",
        component:  AhutorComponent,
      },
      {
        path:"contact-us",
        component:  ContactComponent,
      },
      {
        path:"privacy",
        component:  PrivacyPolicyComponent,
      }
    ]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeadrComponent,
    LeautComponent,
    FottofComponent,
    HomeComponent,
    CategoriComponent,
    AuthorsComponent,
    JoinNowComponent,
    BlogComponent,
    AllPpostComponent,
    BlogPostComponent,
    ReadNextComponent,
    AboutUsComponent,
    ViewAllComponent,
    CategoryComponent,
    CategoryPostComponent,
    CategoriMinComponent,
    AllTagsComponent,
    AhutorComponent,
    AhutorPostComponent,
    ContactComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
