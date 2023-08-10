import { Component} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
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
