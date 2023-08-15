import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Authors} from 'src/app/Models/autorsh';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
import { ViewAllComponent } from "../../componet/view-all/view-all.component";
import { CategoriComponent } from "../../componet/categori/categori.component";
import { AuthorsComponent } from "../../componet/authors/authors.component";
import { JoinNowComponent } from "../../componet/join-now/join-now.component";
import { NgFor } from '@angular/common';


@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterLink, NgFor,  ViewAllComponent, CategoriComponent, AuthorsComponent, JoinNowComponent]
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

