import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from 'src/app/Models/allPost';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-all-post',
  templateUrl: './admin-all-post.component.html',
  styleUrls: ['./admin-all-post.component.css'],
  standalone:true,
  imports:[ NgFor, NgStyle, ReactiveFormsModule] 

})
export class AdminPostComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.blog.BlogPost;
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: Post[] = []
  item!:Post | undefined
  ngOnInit(): void {
     this.service.getRequest<Post[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      img: "assets/images/blogPage/blog5.png",
      cImg:"assets/images/blogPage/P-business.jpg",
      bigImg:"../../../assets/images/blogPage/big-blog-1.jpg",
      name:"",
      title: "",
      paragraph:"",
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<Post[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item : Post){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = true
    this.item = item
    this.form.value.name = item.name
    this.form.value.title = item.title
    this.form.value.paragraph = item.paragraph
  }
  post(){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = false
    
  }
  save(id:number | undefined){
    if(this.boolSave === true){
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => {})
      this.bool = false
      this.service.getRequest<Post[]>(this.url).subscribe((data) => {this.data = data})
    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
      this.service.getRequest<Post[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
  
}
