import { Component, Input } from '@angular/core';
import { Authors } from '../../Models/autorsh';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  @Input() authorsInner!: Authors
}
