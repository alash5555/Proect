import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/categori';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
import { CategoryPostComponent } from "../../componet/category-post/category-post.component";
import { CategoriMinComponent } from "../../componet/categori-min/categori-min.component";
import { AllTagsComponent } from "../../componet/all-tags/all-tags.component";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
    standalone: true,
    imports: [CategoryPostComponent, CategoriMinComponent, AllTagsComponent]
})
export class CategoryComponent implements OnInit {
  constructor(public srvice: RequestService, public active : ActivatedRoute){}
  url:string = enviroments.home.category
  id:number = +this.active.snapshot.params["id"];
  data!:Category;
  ngOnInit(): void {
    this.srvice.getRequest<Category>(this.url+ `/${this.id}`).subscribe((data) => {
      this.data = data
    })
  }   


  
}
