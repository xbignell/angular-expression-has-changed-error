import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-example-children',
  templateUrl: './second-example-children.component.html',
  styleUrls: ['./second-example-children.component.css'],
})
export class SecondExampleChildrenComponent {
  @Input() set car(car: { id: number; model: string }) {
    car.model = 'Renault';
  }
}
