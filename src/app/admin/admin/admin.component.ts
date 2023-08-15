import { NgStyle } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone:true,
  imports:[NgStyle, RouterOutlet,RouterLink, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule]
})

export class AdminComponent {
  bol:boolean = true;
  toggle(){
    if(this.bol === true){
     this.bol = false
    }else{
      this.bol = true
    }
  }
  exit(){
    localStorage.removeItem('token')
  }
}
