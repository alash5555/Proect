import { Component, Input } from '@angular/core';
import { ReadNext } from 'src/app/Models/readNext';
@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.css']
})
export class ReadNextComponent {
  @Input() readNextInner!: ReadNext;
}
