import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/allPost';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  constructor(public service: RequestService){}
  @Input() allPostInner!:Post;
  url:string = enviroments.blog.BlogPost;
  data:Post[] = [];
  ngOnInit(): void {
      this.service.getRequest<Post[]>(this.url).subscribe((data) => {
      this.data = data  
  })
  }
}
