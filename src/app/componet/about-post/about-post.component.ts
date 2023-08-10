import { Component } from '@angular/core';
import { AboutPost } from 'src/app/Models/aboutPost';
import { AhutorPost } from 'src/app/Models/ahutor-post';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.css']
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
