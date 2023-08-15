import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AllTags } from 'src/app/Models/allTags';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.css'],
  standalone:true,
  imports:[NgFor]
})
export class AllTagsComponent implements OnInit{
  @Input() allTagsInner!: AllTags
  url:string = enviroments.category.allTags;
  data:AllTags[] = [];
  constructor(public service: RequestService){}
  ngOnInit(): void {
    this.service.getRequest<AllTags[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
}
