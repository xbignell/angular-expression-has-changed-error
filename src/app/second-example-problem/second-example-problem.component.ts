import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-example-problem',
  templateUrl: './second-example-problem.component.html',
  styleUrls: ['./second-example-problem.component.css'],
})
export class SecondExampleProblemComponent {
  public car = { id: 30, model: 'Opel Astra' };
}
