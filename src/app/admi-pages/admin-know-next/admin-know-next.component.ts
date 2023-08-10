import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutPost } from 'src/app/Models/aboutPost';
import { AboutPostComponent } from 'src/app/componet/about-post/about-post.component';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-know-next',
  templateUrl: './admin-know-next.component.html',
  styleUrls: ['./admin-know-next.component.css']
})
export class AdminKnowNextComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.aboutUs.aboutPost
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: AboutPost[] = []
  item!:AboutPost | undefined
  ngOnInit(): void {
     this.service.getRequest<AboutPost[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      img: "assets/images/aboutPage/about3.png",
      title:"",
      paragraph:"",
      text:""
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<AboutPost[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item : AboutPost){
  !this.bool ? this.bool = true : this.bool = false;
  this.boolSave = true
  this.item = item
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
    this.service.getRequest<AboutPost[]>(this.url).subscribe((data) => {this.data = data})

    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
     this.service.getRequest<AboutPost[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
}
