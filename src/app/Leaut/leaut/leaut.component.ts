import { Component } from '@angular/core';
import { FottofComponent } from '../fottof/fottof.component';
import { HeadrComponent } from '../headr/headr.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-leaut',
  templateUrl: './leaut.component.html',
  styleUrls: ['./leaut.component.css'],
  standalone:true,
  imports:[FottofComponent, HeadrComponent, RouterOutlet, RouterLink]
})
export class LeautComponent {

}
