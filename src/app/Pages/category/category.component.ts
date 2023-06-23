import { Component } from '@angular/core';
import { CategoryPost } from 'src/app/Models/categoryPost';
import { CategoryMin } from 'src/app/Models/categori-min';
import { AllTags } from 'src/app/Models/allTags';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {    
  PostArr:CategoryPost[] =[
    {
      id:1,
      img:"assets/images/repeatImages/blog2.png",
      title:"Business",
      paragraph:"Top 6 free website mockup tools  2022",
      text:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
    },
    {
      id:2,
      img:"assets/images/repeatImages/blog2.png",
      title:"Business",
      paragraph:"Step-by-step guide to choosing great font pairs",
      text:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
    },
    {
      id:3,
      img:"assets/images/repeatImages/blog2.png",
      title:"Business",
      paragraph:"Ten free foogle fonts that you should use",
      text:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
    },
    {
      id:4,
      img:"assets/images/repeatImages/blog2.png",
      title:"Business",
      paragraph:"What did I learn from doing 50+ design sprints?",
      text:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec."
    },
  ]
  categoryArr:CategoryMin[] =[
    {
      id:1,
      img:"assets/images/homePage/icons-3.png",
      title:"Business",
    },
    {
      id:2,
      img:"assets/images/homePage/icons-4.png",
      title:"Startup",
    },
    {
      id:3,
      img:"assets/images/homePage/icons-2.png",
      title:"Economy",
    },
    {
      id:4,
      img:"assets/images/homePage/icons-1.png",
      title:"Technology",
    }
  ]
  allTagsArr:AllTags[] =[
    {
      id:1,
      text:"Business"
    },
    {
      id:2,
      text:"Experience"
    },
    {
      id:3,
      text:"Screen"
    },
    {
      id:4,
      text:"Technology"
    },
    {
      id:5,
      text:"Marketing"
    },
    {
      id:6,
      text:"Life"
    }
  ]
}
