import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-second-example-solution-children',
  templateUrl: './second-example-solution-children.component.html',
  styleUrls: ['./second-example-solution-children.component.css'],
})
export class SecondExampleSolutionChildrenComponent implements OnInit {
  constructor(private carService: CarService) {}

  public ngOnInit() {
    this.carService.changeModel('Renault');
  }
}
