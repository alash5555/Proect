import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authors } from 'src/app/Models/autorsh';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
import { AhutorPostComponent } from "../../componet/ahutor-post/ahutor-post.component";
@Component({
    selector: 'app-ahutor',
    templateUrl: './ahutor.component.html',
    styleUrls: ['./ahutor.component.css'],
    standalone: true,
    imports: [AhutorPostComponent]
})
export class AhutorComponent  implements OnInit{
  url:string = enviroments.home.ahutors
  data!:Authors;
  id:number = +this.active.snapshot.params['id'];
  constructor(public active: ActivatedRoute, public service: RequestService){}
  ngOnInit(): void {
    this.service.getRequest<Authors>(this.url+ `/${this.id}`).subscribe((data) => {
      this.data = data
    })
  }
}
