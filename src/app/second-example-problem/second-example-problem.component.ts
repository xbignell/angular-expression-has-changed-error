import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs';
import { CarService } from '../car.service';

@Component({
  selector: 'app-second-example-problem',
  templateUrl: './second-example-problem.component.html',
  styleUrls: ['./second-example-problem.component.css'],
})
export class SecondExampleProblemComponent {
  public model$ = this.carService.carModel$;

  constructor(
    private carService: CarService,
    private changeDetector: ChangeDetectorRef
  ) {}
}
