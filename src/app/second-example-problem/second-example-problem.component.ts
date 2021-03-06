import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-second-example-problem',
  templateUrl: './second-example-problem.component.html',
  styleUrls: ['./second-example-problem.component.css'],
  providers: [CarService],
})
export class SecondExampleProblemComponent {
  public model$ = this.carService.carModel$;
  constructor(private carService: CarService) {}
}
