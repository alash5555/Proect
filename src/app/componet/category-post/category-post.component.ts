import { Component, Input } from '@angular/core';
import { CategoryPost } from 'src/app/Models/categoryPost';
@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent {
  @Input()categoryPostInner!: CategoryPost
}
