
import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from 'src/app/Models/allPost';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-all-ppost',
  templateUrl: './all-ppost.component.html',
  styleUrls: ['./all-ppost.component.css'],
  standalone:true,
  imports:[RouterLink, NgIf, NgFor]
})
export class AllPpostComponent implements OnInit{
  @Input() AllPostInner!: Post;
  url:string = enviroments.blog.BlogPost;
  data:Post[] = [];
  constructor(public srevice:RequestService){}
  ngOnInit(): void {
    this.srevice.getRequest<Post[]>(this.url).subscribe((data) =>{
      this.data = data
    })
  }

}
