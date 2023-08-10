import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authors} from 'src/app/Models/autorsh';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  url:string = enviroments.home.ahutors;
  data:Authors[] = [];
  constructor(public servisr: RequestService, public router: Router){}
  ngOnInit(): void {
    this.servisr.getRequest<Authors[]>(this.url + "?_limit=4").subscribe((data) => {
      this.data = data
    })
  }

}

