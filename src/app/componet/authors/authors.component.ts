import { Component, Input, OnInit } from '@angular/core';
import { Authors } from '../../Models/autorsh';
import { enviroments } from 'src/enviroments/enviroments';
import { RequestService } from 'src/app/servise/request.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  url:string = enviroments.home.ahutors;
  data:Authors[] = [];
  constructor(public servisr: RequestService){}
  ngOnInit(): void {
    this.servisr.getRequest<Authors[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
}
