import { Component } from '@angular/core';
import { Category } from 'src/app/Models/categori';
import { Authors } from '../../Models/autorsh';
import { AllPost } from 'src/app/Models/viewAll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
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
    }
  ]
  viewPostArr:AllPost[] = [
    {
      id: 1,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    },
    {
      id: 2,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    },
    {
      id: 3,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    },
    {
      id: 4,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    }
  ]
}

