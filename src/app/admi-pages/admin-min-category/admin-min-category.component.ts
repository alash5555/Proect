import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryMin } from 'src/app/Models/categori-min';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-admin-min-category',
  templateUrl: './admin-min-category.component.html',
  styleUrls: ['./admin-min-category.component.css']
})
export class AdminMinCategoryComponent {
  constructor(public service: RequestService, public fb: FormBuilder){}
  url:string = enviroments.category.categoryMin
  bool:boolean = false;
  boolSave:boolean = true
  form!:FormGroup
  data: CategoryMin[] = []
  item!: CategoryMin | undefined
  ngOnInit(): void {
     this.service.getRequest<CategoryMin[]>(this.url).subscribe((data) => {this.data = data})
    this.form = this.fb.group({
      img: "assets/images/homePage/icons-3.png",
      title:"",
    })

  }
  delate(i:number){
    this.service.delate(this.url + `/${i}`).subscribe(() => {})
    this.service.getRequest<CategoryMin[]>(this.url).subscribe((data) => {this.data = data})
  }
  edit(item : CategoryMin){
  !this.bool ? this.bool = true : this.bool = false;
  this.boolSave = true
  this.item = item
  this.form.value.title = this.item.title
  }
  post(){
    !this.bool ? this.bool = true : this.bool = false;
    this.boolSave = false
    
  }
  save(id:number | undefined){
    if(this.boolSave === true){
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => {})
    this.bool = false
    this.service.getRequest<CategoryMin[]>(this.url).subscribe((data) => {this.data = data})

    }else if(this.boolSave === false ) {
    if(this.form.value.name !== "" && this.form.value.paragraph !== ""){
      this.service.postRequest(this.url, this.form.value).subscribe(() => {})
      this.bool = false
     this.service.getRequest<CategoryMin[]>(this.url).subscribe((data) => {this.data = data})
    }
  }
}
  colse(){
    this.bool = false
  }
}
