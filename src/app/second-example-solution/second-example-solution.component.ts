import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { SecondExampleProblemService } from '../second-example-problem.service';

@Component({
  selector: 'app-second-example-solution',
  templateUrl: './second-example-solution.component.html',
  styleUrls: ['./second-example-solution.component.css'],
  providers: [SecondExampleProblemService],
})
export class SecondExampleSolutionComponent {
  public model$ = this.carService.carModel$;
  constructor(private carService: CarService) {}
}
