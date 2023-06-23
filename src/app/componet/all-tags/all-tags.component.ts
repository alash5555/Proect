import { Component, Input } from '@angular/core';
import { AllTags } from 'src/app/Models/allTags';
@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.css']
})
export class AllTagsComponent {
  @Input() allTagsInner!: AllTags
}
