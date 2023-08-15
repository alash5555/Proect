
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component'
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LeautComponent } from './Leaut/leaut/leaut.component';
import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminComponent } from './admin/admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
const route:Route[]=[

  {
    path:'',
    component:LeautComponent,
    children:[
      {
        path:"",
        loadChildren:() => import('./Pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'blog',
        loadChildren:() => import('./Pages/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path:'blog-post/:id',
        loadChildren:() => import('./Pages/blog-post/blog-post.module').then(m => m.BlogPostModule)
      },
      {
        path:"about-us",
        loadChildren:() =>  import('./Pages/about-us/abaut.module').then(m => m.AbautModule)
      },
      {
        path:"category/:id",
        loadChildren:() => import('./Pages/category/category.module').then(m => m.CategoryModule)
      },
      {
        path:"ahutor/:id",
        loadChildren: () => import('./Pages/ahutor/ahutor.module').then(m => m.AhutorModule)
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
    canActivate:[authGuard],
    children:[
      {
        path:"category",
        loadChildren:() => import('./admi-pages/admin-category/admin-category.module').then(m => m.AdminCategoryModule)
      },
      {
        path:"ahutors",
        loadChildren: () => import('./admi-pages/admin-ahutors/admin-ahutor.module').then(m => m.AdminAhutorModule)
      },
      {
        path:"read-Next",
        loadChildren: () => import('./admi-pages/admin-read-next/admin-read-next.module').then( m => m.AdminReadNextModule)
      },
      {
        path:"all-post",
        loadChildren: () => import('./admi-pages/admin-all-post/admin-all-post.module').then(m => m.AdminAllPostModule)
      },
      {
        path:"Know-next",
        loadChildren:() => import('./admi-pages/admin-know-next/admin-know-next.module').then(m => m.AdminKnowNextModule)
      },
      {
        path:"category-post",
        loadChildren: () => import('./admi-pages/admin-category-post/admin-category-post.module').then(m => m.AdminCategoryPostModule)
      },
      {
        path:"category-min",
        loadChildren: () => import('./admi-pages/admin-min-category/admin-category-min.module').then(m => m.AdminCategoryMinModule)
        
      },
      {
        path:"category-All-tags",
        loadChildren:() => import('./admi-pages/admin-catgory-min-post/admin-category-min-post-routing.module').then(m => m.AdminCategoryMinPostRoutingModule)
      },
      {
        path:"ahutors-post",
        loadChildren: () => import('./admi-pages/admin-ahutor-post/admin-ahutor-post.module').then(m => m.AdminAhutorPostModule)
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
    ContactComponent,
    PrivacyPolicyComponent,
    LoginComponent,
    PageNotFoundComponent,
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
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
