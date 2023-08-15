import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from 'src/app/Models/categori';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';

@Component({
  selector: 'app-categori',
  templateUrl: './categori.component.html',
  styleUrls: ['./categori.component.css'],
  standalone:true,
  imports:[RouterModule, NgFor, NgIf]
})
export class CategoriComponent  implements OnInit{
  @Input() categoriInner!: Category
  url:string = enviroments.home.category;

  data:Category[] = []
  constructor(public service: RequestService ){}
  ngOnInit(): void {
      this.service.getRequest<Category[]>(this.url).subscribe((data) => {
        this.data = data
      })
  }
}
