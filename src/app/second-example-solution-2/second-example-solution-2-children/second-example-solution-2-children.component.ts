import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-second-example-solution-2-children',
  templateUrl: './second-example-solution-2-children.component.html',
  styleUrls: ['./second-example-solution-2-children.component.css'],
})
export class SecondExampleSolution2ChildrenComponent implements OnInit {
  constructor(private carService: CarService) {}

  public ngOnInit() {
    setTimeout(() => {
      this.carService.changeModel('Opel');
    });
  }
}
