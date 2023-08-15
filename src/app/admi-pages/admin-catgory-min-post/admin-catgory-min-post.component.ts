import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AllTags } from 'src/app/Models/allTags';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-catgory-min-post',
  templateUrl: './admin-catgory-min-post.component.html',
  styleUrls: ['./admin-catgory-min-post.component.css'],
  standalone:true,
  imports:[ NgFor, NgStyle,  ReactiveFormsModule] 
})
export class AdminCatgoryMinPostComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.category.allTags
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: AllTags[] = []
  item!: AllTags | undefined
  ngOnInit(): void {
     this.service.getRequest<AllTags[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      text:"",
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<AllTags[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item :AllTags){
  !this.bool ? this.bool = true : this.bool = false;
  this.boolSave = true
  this.item = item
  this.form.value.text = this.item.text
  }
  post(){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = false
    
  }
  save(id:number | undefined){
    if(this.boolSave === true){
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => {})
    this.bool = false
    this.service.getRequest<AllTags[]>(this.url).subscribe((data) => {this.data = data})

    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
     this.service.getRequest<AllTags[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
}
