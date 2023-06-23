import { Component, Input } from '@angular/core';
import { CategoryMin } from 'src/app/Models/categori-min';

@Component({
  selector: 'app-categori-min',
  templateUrl: './categori-min.component.html',
  styleUrls: ['./categori-min.component.css']
})
export class CategoriMinComponent {
  @Input() categoriInner!: CategoryMin
}
