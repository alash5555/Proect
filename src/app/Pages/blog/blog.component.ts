import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/categori';
import { RequestService } from 'src/app/servise/request.service';
import { enviroments } from 'src/enviroments/enviroments';
import { AllPpostComponent } from "../../componet/all-ppost/all-ppost.component";
import { CategoriComponent } from "../../componet/categori/categori.component";
import { JoinNowComponent } from "../../componet/join-now/join-now.component";
@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    standalone: true,
    imports: [AllPpostComponent, CategoriComponent, JoinNowComponent]
})
export class BlogComponent {
}
