import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,  FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { AhutorPost } from 'src/app/Models/ahutor-post';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-ahutor-post',
  templateUrl: './admin-ahutor-post.component.html',
  styleUrls: ['./admin-ahutor-post.component.css'],
  standalone:true,
  imports:[ NgFor, NgStyle, ReactiveFormsModule] 
})
export class AdminAhutorPostComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.ahutors.ahutorsPost;
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup;
  data: AhutorPost[] = []
  item!:AhutorPost | undefined
  ngOnInit(): void {
     this.service.getRequest<AhutorPost[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      img: "assets/images/My-Post/my-post-img-2.png",
      name:"",
      title: "",
      text:"",
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<AhutorPost[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item : AhutorPost){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = true
    this.item = item
    this.form.value.name = item.name
    this.form.value.title = item.title
    this.form.value.text = item.text
  }
  post(){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = false
    
  }
  save(id:number | undefined){
    if(this.boolSave === true){
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => {})
      this.bool = false
      this.service.getRequest<AhutorPost[]>(this.url).subscribe((data) => {this.data = data})
    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
      this.service.getRequest<AhutorPost[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
}
