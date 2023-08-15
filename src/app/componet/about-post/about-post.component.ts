import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { AboutPost } from 'src/app/Models/aboutPost';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  standalone:true,
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.css'],
  imports:[NgStyle, NgFor]
})
export class AboutPostComponent {
  url:string = enviroments.aboutUs.aboutPost ;
  data:AboutPost[] = [];
  constructor(public servisr: RequestService){}
  ngOnInit(): void {
    this.servisr.getRequest<AboutPost[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
  
}
