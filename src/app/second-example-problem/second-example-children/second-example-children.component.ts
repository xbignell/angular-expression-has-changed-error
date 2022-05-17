import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-example-children',
  templateUrl: './second-example-children.component.html',
  styleUrls: ['./second-example-children.component.css'],
})
export class SecondExampleChildrenComponent {
  @Input() car: { id: number; model: string };

  public changeModel() {
    this.car.model = 'Renault';
  }
}
