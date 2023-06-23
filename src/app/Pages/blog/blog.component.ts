import { Component } from '@angular/core';
import { Category } from 'src/app/Models/categori';
import { Post } from  'src/app/Models/allPost'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  categoryArr:Category[] = [
    {
      id:1,
      img:"../../../assets/images/homePage/icons-3.png",
      title:"Business",
      paragraph:"lorem ipsum dolor sit amet,  consectetuer "
    },
    {
      id:2,
      img:"../../../assets/images/homePage/icons-4.png",
      title:"Startup",
      paragraph:"lorem ipsum dolor sit amet,  consectetuer "
    },
    {
      id:3,
      img:"../../../assets/images/homePage/icons-2.png",
      title:"Economy",
      paragraph:"lorem ipsum dolor sit amet,  consectetuer "
    },
    {
      id:4,
      img:"../../../assets/images/homePage/icons-1.png",
      title:"Technology",
      paragraph:"lorem ipsum dolor sit amet,  consectetuer "
    }
  ]
  allPost: Post[]=[
    {
      id:1,
      img:"assets/images/repeatImages/blog2.png",
      title:"Startup",
      name:"Design tips for designers that cover everything you need",
      paragraph: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",       
    },
    {
      id:2,
      img:"assets/images/repeatImages/blog3.png",
      title:"BUSINESS",
      name:"How to build rapport with your web  design clients",
      paragraph: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",       
    },
    {
      id:3,
      img:"assets/images/repeatImages/blog4.png",
      title:"Startup",
      name:"Logo design trends to avoid in 2022",
      paragraph: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",       
    },
    {
      id:4,
      img:"assets/images/blogPage/blog5.png",
      title:"TECHNOLOGY",
      name:"Font sizes in UI design: The complete  guide to follow",
      paragraph: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",       
    },
    {
      id:5,
      img:"assets/images/repeatImages/blog2.png",
      title:"ECONOMY",
      name:"Font sizes in UI design: The complete  guide to follow",
      paragraph: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",       
    }
    
    
  ]
}
