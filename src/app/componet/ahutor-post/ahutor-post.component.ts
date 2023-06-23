import { Component, Input } from '@angular/core';
import { AhutorPost } from 'src/app/Models/ahutor-post';
@Component({
  selector: 'app-ahutor-post',
  templateUrl: './ahutor-post.component.html',
  styleUrls: ['./ahutor-post.component.css']
})
export class AhutorPostComponent {
  @Input() ahutorPostDate!: AhutorPost;
}
