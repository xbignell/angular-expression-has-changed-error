import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-second-example-solution-2',
  templateUrl: './second-example-solution-2.component.html',
  styleUrls: ['./second-example-solution-2.component.css'],
  providers: [CarService],
})
export class SecondExampleSolution2Component {
  public model$ = this.carService.carModel$;
  constructor(private carService: CarService) {}
}
