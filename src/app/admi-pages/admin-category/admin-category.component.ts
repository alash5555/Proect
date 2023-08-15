import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category } from 'src/app/Models/categori';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  standalone:true,
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css'],
  imports:[NgFor, NgStyle, ReactiveFormsModule]
})

export class AdminCategoryComponent  implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.home.category;
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: Category[] = []
  item!:Category | undefined
  ngOnInit(): void {
     this.service.getRequest<Category[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      img:"../../../assets/images/homePage/icons-3.png",
      title:"",
      paragraph:"",
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<Category[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item? : Category){
  !this.bool ? this.bool = true : this.bool = false;
  this.boolSave = true
  this.item = item
  this.form.value.title = item?.title,
  this.form.value.paragraph = item?.paragraph;
  }
  post(){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = false
  }
  save(id:number | undefined){
    if(this.boolSave === true){
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => {})
      this.bool = false
      this.service.getRequest<Category[]>(this.url).subscribe((data) => {this.data = data})
    }else if(this.boolSave === false ) {
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
      this.service.getRequest<Category[]>(this.url).subscribe((data) => {this.data = data})
    }
    this.service.getRequest<Category[]>(this.url).subscribe((data) => {this.data = data})
    this.boolSave
    
  }
  cols(){
    this.bool = false
  }
  
}

