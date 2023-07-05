import { Component, Input, OnInit } from '@angular/core';
import { CategoryMin } from 'src/app/Models/categori-min';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-categori-min',
  templateUrl: './categori-min.component.html',
  styleUrls: ['./categori-min.component.css']
})
export class CategoriMinComponent implements OnInit{
  @Input() categoriInner!: CategoryMin
  url:string = enviroments.category.categoryMin;
  data: CategoryMin[] = [];
  constructor(public service: RequestService){}
  ngOnInit(): void {
    this.service.getRequest<CategoryMin[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }

}
