
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component'
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { AboutPostComponent } from './componet/about-post/about-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminCategoryComponent } from './admi-pages/admin-category/admin-category.component';
import { AdminAhutorsComponent } from './admi-pages/admin-ahutors/admin-ahutors.component';
import { AdminReadNextComponent } from './admi-pages/admin-read-next/admin-read-next.component';
import { AdminPostComponent } from './admi-pages/admin-all-post/admin-all-post.component';
import { AdminKnowNextComponent } from './admi-pages/admin-know-next/admin-know-next.component';
import { AdminCategoryPostComponent } from './admi-pages/admin-category-post/admin-category-post.component';
import { AdminMinCategoryComponent } from './admi-pages/admin-min-category/admin-min-category.component';
import { AdminCatgoryMinPostComponent } from './admi-pages/admin-catgory-min-post/admin-catgory-min-post.component';
import { AdminAhutorPostComponent } from './admi-pages/admin-ahutor-post/admin-ahutor-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const route:Route[]=[

  {
    path:'',
    component:  LeautComponent,
    children:[
      {
        path:"",
        component: HomeComponent
      },
      {
        path:'blog',
        component: BlogComponent
      },
      {
        path:'blog-post/:id',
        component: BlogPostComponent
      },
      {
        path:"about-us",
        component: AboutUsComponent
      },
      {
        path:"category/:id",
        component:  CategoryComponent,
      },
      {
        path:"ahutor/:id",
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
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children:[
      {
        path:"category",
        component:AdminCategoryComponent
      },
      {
        path:"ahutors",
        component:AdminAhutorsComponent
      },
      {
        path:"read-Next",
        component:AdminReadNextComponent
      },
      {
        path:"all-post",
        component: AdminPostComponent
      },
      {
        path:"Know-next",
        component: AdminKnowNextComponent
      },
      {
        path:"category-post",
        component:  AdminCategoryPostComponent
      },
      {
        path:"category-min",
        component: AdminMinCategoryComponent
      },
      {
        path:"category-All-tags",
        component: AdminCatgoryMinPostComponent
      },
      {
        path:"ahutors-post",
        component: AdminAhutorPostComponent
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
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
    PrivacyPolicyComponent,
    AboutPostComponent,
    LoginComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminAhutorsComponent,
    AdminReadNextComponent,
    AdminPostComponent,
    AdminKnowNextComponent,
    AdminCategoryPostComponent,
    AdminMinCategoryComponent,
    AdminCatgoryMinPostComponent,
    AdminAhutorPostComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
