import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-second-example-solution',
  templateUrl: './second-example-solution.component.html',
  styleUrls: ['./second-example-solution.component.css'],
  providers: [CarService],
})
export class SecondExampleSolutionComponent {
  public model$ = this.carService.carModel$;
  constructor(private carService: CarService) {}
}
