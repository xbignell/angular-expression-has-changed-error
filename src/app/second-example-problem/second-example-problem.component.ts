import { ChangeDetectorRef, Component } from '@angular/core';
import { tap } from 'rxjs';
import { CarService } from '../car.service';
import { SecondExampleProblemService } from '../second-example-problem.service';

@Component({
  selector: 'app-second-example-problem',
  templateUrl: './second-example-problem.component.html',
  styleUrls: ['./second-example-problem.component.css'],
  providers: [SecondExampleProblemService],
})
export class SecondExampleProblemComponent {
  public model$ = this.carService.carModel$;
  constructor(private carService: CarService) {}
}
