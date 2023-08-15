import { Component, OnInit } from '@angular/core';
import { Authors } from '../../Models/autorsh';
import { enviroments } from 'src/enviroments/enviroments';
import { RequestService } from 'src/app/servise/request.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AboutPostComponent } from 'src/app/componet/about-post/about-post.component';
import { AuthorsComponent } from 'src/app/componet/authors/authors.component';
import { NgFor } from '@angular/common';
import { JoinNowComponent } from 'src/app/componet/join-now/join-now.component';

@Component({
  standalone: true,
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  imports:[RouterModule, JoinNowComponent, AboutPostComponent, AuthorsComponent,  RouterLink, NgFor]
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


