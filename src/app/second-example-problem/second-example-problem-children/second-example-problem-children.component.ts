import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-second-example-problem-children',
  templateUrl: './second-example-problem-children.component.html',
  styleUrls: ['./second-example-problem-children.component.css'],
})
export class SecondExampleProblemChildrenComponent implements OnInit {
  constructor(private carService: CarService) {}

  public ngOnInit() {
    this.carService.changeModel('Renault');
    this.carService.changeName('Megane');
    this.carService.changeRegisterDate(new Date());
  }
}
