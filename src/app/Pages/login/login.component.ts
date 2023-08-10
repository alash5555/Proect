import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginModels } from 'src/app/Models/login';
import { LoginPassEmail } from 'src/app/Models/loginToken';
import { RequestService } from 'src/app/servise/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  url:string = "https://reqres.in/api/login"
  date!: LoginModels;
  form!:FormGroup;
  constructor(public fb:FormBuilder, public servic: RequestService, public router:Router){}
  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  login(){
    this.servic.postRequest<LoginPassEmail>(this.url, this.form.value).subscribe((data) => {
      this.date = data as LoginModels;
      console.log(this.date.token);
      localStorage.setItem('token', this.date.token);
      this.router.navigate(['/admin'])
    })
  }
  
}
