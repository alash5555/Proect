import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReadNext } from 'src/app/Models/readNext';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.css'],
  standalone:true,
  imports:[NgFor]
})
export class ReadNextComponent implements OnInit{
  url:string = enviroments.blogPost.read;
  data:ReadNext[] = []
  constructor(public service:RequestService){}
  ngOnInit(): void {
    this.service.getRequest<ReadNext[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }

}
