import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryPost } from 'src/app/Models/categoryPost';
import { CategoryPostComponent } from 'src/app/componet/category-post/category-post.component';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-category-post',
  templateUrl: './admin-category-post.component.html',
  styleUrls: ['./admin-category-post.component.css']
})
export class AdminCategoryPostComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.category.PostCategory
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: CategoryPost[] = []
  item!:CategoryPost | undefined
  ngOnInit(): void {
     this.service.getRequest<CategoryPost[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      img: "assets/images/repeatImages/blog2.png",
      title:"",
      paragraph:"",
      text:""
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<CategoryPost[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item : CategoryPost){
  !this.bool ? this.bool = true : this.bool = false;
  this.boolSave = true
  this.item = item
  this.form.value.paragraph = item.paragraph
  this.form.value.text = item.text
  this.form.value.title = item.title
  }
  post(){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = false
    
  }
  save(id:number | undefined){
    if(this.boolSave === true){
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => {})
    this.bool = false
    this.service.getRequest<CategoryPost[]>(this.url).subscribe((data) => {this.data = data})

    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
     this.service.getRequest<CategoryPost[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
}
