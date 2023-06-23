import { Component } from '@angular/core';
import { ReadNext } from 'src/app/Models/readNext';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  readArr: ReadNext[] = [
    {
      id:1,
      img: "assets/images/cotegoryPage/blog2.png",
      title: "By John Doe l Aug 23, 2021",
      name:"A UX Case Study Creating a  Studious Environment for  Students",
      paragraph:"Duis aute irure dolor in reprehenderit in voluptate < velit essecillumdolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat nonproident.",
    },
    {
      id:2,
      img: "assets/images/repeatImages/blog3.png",
      title: "By John Doe l Aug 23, 2021",
      name:"A UX Case Study Creating a  Studious Environment for  Students",
      paragraph:"Duis aute irure dolor in reprehenderit in voluptate < velit essecillumdolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat nonproident.",
    }
    ,
    {
      id:3,
      img: "assets/images/repeatImages/blog4.png",
      title: "By John Doe l Aug 23, 2021",
      name:"A UX Case Study Creating a  Studious Environment for  Students",
      paragraph:"Duis aute irure dolor in reprehenderit in voluptate < velit essecillumdolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat nonproident.",
    }
  ]
}
