import { Component, Input} from '@angular/core';
import { Category } from 'src/app/Models/categori';

@Component({
  selector: 'app-categori',
  templateUrl: './categori.component.html',
  styleUrls: ['./categori.component.css']
})
export class CategoriComponent {
  @Input() categoriInner!: Category
}
