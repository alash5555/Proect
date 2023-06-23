import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Models/allPost';

@Component({
  selector: 'app-all-ppost',
  templateUrl: './all-ppost.component.html',
  styleUrls: ['./all-ppost.component.css']
})
export class AllPpostComponent {
  @Input() AllPostInner!: Post
}
