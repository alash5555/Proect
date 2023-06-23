import { Component, Input } from '@angular/core';
import { AllPost } from 'src/app/Models/viewAll';
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
  @Input() allPostInner!:AllPost
}
