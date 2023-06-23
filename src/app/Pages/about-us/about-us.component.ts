import { Component } from '@angular/core';
import { Authors } from '../../Models/autorsh';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  ahutorsArr:Authors[] = [
    {
      id: 1,
      img: 'assets/images/Authors/img-1.png',
      name: 'Floyd Miles',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    {
      id: 2,
      img: 'assets/images/Authors/img-2.png',
      name: 'Dianna Rusel',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    {
      id: 3,
      img: 'assets/images/Authors/img-3.png',
      name: 'Jenny Wilson',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    {
      id: 4,
      img: 'assets/images/Authors/img-4.png',
      name: 'Leslie Alexander',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    {
      id: 5,
      img: 'assets/images/repeatImages/user-33.png',
      name: 'Guy Hawkins',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    {
      id: 6,
      img: 'assets/images/repeatImages/user-2.png',
      name: 'Guy Hawkins',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    {
      id: 7,
      img: 'assets/images/repeatImages/user-22.png',
      name: 'Robert Fox',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    {
      id: 8,
      img: 'assets/images/repeatImages/user-11.png',
      name: 'Robert Fox',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/images/Authors/A-icon-1.png',
      icon2: 'assets/images/Authors/A-icon-2.png',
      icon3: 'assets/images/Authors/A-icon-3.png',
      icon4: 'assets/images/Authors/A-icon-4.png'
    },
    
    
    
    
  ]
}
