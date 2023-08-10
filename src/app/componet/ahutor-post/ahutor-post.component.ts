import { Component, Input, OnInit } from '@angular/core';
import { AhutorPost } from 'src/app/Models/ahutor-post';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-ahutor-post',
  templateUrl: './ahutor-post.component.html',
  styleUrls: ['./ahutor-post.component.css']
})
export class AhutorPostComponent {
  url:string = enviroments.ahutors.ahutorsPost;
  data:AhutorPost[] = [];
  constructor(public servisr: RequestService){}
  ngOnInit(): void {
    this.servisr.getRequest<AhutorPost[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
}
