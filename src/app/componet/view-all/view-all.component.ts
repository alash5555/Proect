import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/allPost';
import { AllPost } from 'src/app/Models/viewAll';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  @Input() allPostInner!:AllPost;
  url:string = enviroments.home.AllPost;
  data:AllPost[] = [];
  constructor(public service: RequestService ){}

  ngOnInit(): void {
      this.service.getRequest<AllPost[]>(this.url).subscribe((data) => {
      this.data = data  
  })
  }
}
