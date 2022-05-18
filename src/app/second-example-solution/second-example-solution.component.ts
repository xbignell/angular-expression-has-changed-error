import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { CarService } from '../car.service';

@Component({
  selector: 'app-second-example-solution',
  templateUrl: './second-example-solution.component.html',
  styleUrls: ['./second-example-solution.component.css'],
})
export class SecondExampleSolutionComponent {
  public model$ = this.carService.carModel$.pipe(delay(0));

  constructor(private carService: CarService) {}
}
