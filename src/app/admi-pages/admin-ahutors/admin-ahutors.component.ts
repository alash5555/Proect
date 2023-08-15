import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Authors } from 'src/app/Models/autorsh';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-ahutors',
  templateUrl: './admin-ahutors.component.html',
  styleUrls: ['./admin-ahutors.component.css'],
  standalone:true,
  imports:[ NgFor, NgStyle, ReactiveFormsModule] 
})
export class AdminAhutorsComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.home.ahutors;
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: Authors[] = []
  item!:Authors | undefined
  ngOnInit(): void {
     this.service.getRequest<Authors[]>(this.url).subscribe((data) => {this.data = data})
      this.form = this.fb.group({
        img:"assets/images/admin/users-img.png",
        ahutorImg: "assets/images/admin/users-img.png",
        name:"",
        paragraph:"",
        icon1: "assets/images/Authors/A-icon-1.png",
        icon2: "assets/images/Authors/A-icon-2.png",
        icon3: "assets/images/Authors/A-icon-3.png",
        icon4: "assets/images/Authors/A-icon-4.png"
      })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<Authors[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item : Authors){
  !this.bool ? this.bool = true : this.bool = false;
  this.boolSave = true
  this.item = item
  this.form.value.name = item.name
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
    this.service.getRequest<Authors[]>(this.url).subscribe((data) => {this.data = data})

    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
     this.service.getRequest<Authors[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
  
}
