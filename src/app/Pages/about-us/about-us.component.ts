import { Component, OnInit } from '@angular/core';
import { Authors } from '../../Models/autorsh';
import { enviroments } from 'src/enviroments/enviroments';
import { RequestService } from 'src/app/servise/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  url:string = enviroments.home.ahutors;
  data:Authors[] = [];
  constructor(public servisr: RequestService, private router: Router){}
  ngOnInit(): void {
    this.servisr.getRequest<Authors[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
}


