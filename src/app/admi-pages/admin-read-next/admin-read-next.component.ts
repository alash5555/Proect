import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReadNext } from 'src/app/Models/readNext';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-read-next',
  templateUrl: './admin-read-next.component.html',
  styleUrls: ['./admin-read-next.component.css'],
  standalone:true,
  imports:[ NgFor, NgStyle, ReactiveFormsModule] 
})
export class AdminReadNextComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.blogPost.read;
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: ReadNext[] = []
  item!:ReadNext| undefined
  ngOnInit(): void {
     this.service.getRequest<ReadNext[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      img:"assets/images/blogPage/big-blog-3.jpg",
      name:"",
      title: "",
      paragraph:"",
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<ReadNext[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item : ReadNext){
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
    this.service.getRequest<ReadNext[]>(this.url).subscribe((data) => {this.data = data})

    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
     this.service.getRequest<ReadNext[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
  
}
