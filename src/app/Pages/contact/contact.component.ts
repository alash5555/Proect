import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjJson } from 'src/app/Models/objJson';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!:FormGroup
  url:string = enviroments.contact.usersData
  value!:ObjJson
  constructor(public formBuilder:  FormBuilder,  public service :RequestService){}
  ngOnInit():void{
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_-]{1,}@[a-zA-Z0-9]{1,}\.[a-z]{2,4}$/)]],
      select: ['', [Validators.required]],
      massage: ""
      
    })
  }
  send(){
    this.value = this.form.value
     this.service.postRequest<ObjJson>(this.url, this.value).subscribe(() => {
      this.form.reset()
     })
  }

}
