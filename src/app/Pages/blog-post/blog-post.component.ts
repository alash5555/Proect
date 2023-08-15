import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/allPost';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
import { JoinNowComponent } from "../../componet/join-now/join-now.component";
import { ReadNextComponent } from "../../componet/read-next/read-next.component";
@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.css'],
    standalone: true,
    imports: [JoinNowComponent, ReadNextComponent]
})
export class BlogPostComponent {

  url:string = enviroments.blog.BlogPost
  data!:Post;
  id:number = +this.active.snapshot.params["id"];
  constructor(public active: ActivatedRoute, public service: RequestService){}
  ngOnInit(): void {
    this.service.getRequest<Post>(this.url +`/${this.id}`).subscribe((data) => {
      this.data = data
    })
  }
}
 