import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/categori';
import { CategoryPost } from 'src/app/Models/categoryPost';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css'],
  standalone:true,
  imports:[NgFor]
})
export class CategoryPostComponent implements OnInit {
  @Input() categoryDate!: Category
  @Input()categoryPostInner!: CategoryPost
  url:string = enviroments.category.PostCategory;
  data: CategoryPost[] = []
  constructor(public service : RequestService){}
  ngOnInit(): void {
    this.service.getRequest<CategoryPost[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
  
}
