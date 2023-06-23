import { Component } from '@angular/core';
import { AhutorPost } from 'src/app/Models/ahutor-post';
@Component({
  selector: 'app-ahutor',
  templateUrl: './ahutor.component.html',
  styleUrls: ['./ahutor.component.css']
})
export class AhutorComponent {
  ahutorPostArr: AhutorPost[]=[
    {
      id:1,
      img:"../../../assets/images/My-Post/my-post-img-1.png",
      name:"BUSINESS",
      title:'Font sizes in UI design:  The complete guide to follow',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmodtemporincididunt ut labore et dolore magna aliqua.'
    },
    {
      id:2,
      img:"../../../assets/images/My-Post/my-post-img-2.png",
      name:"ECONOMY",
      title:'How to build rapport with  your web design clients',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmodtemporincididunt ut labore et dolore magna aliqua.'
    }
  ]
}
