import { NgFor } from '@angular/common';
import { Component, Input,} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Authors } from 'src/app/Models/autorsh';



@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone:true,
  imports:[RouterLink]
})
export class AuthorsComponent  {
  @Input() ahutorsInner!:Authors

}
