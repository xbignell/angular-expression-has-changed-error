import { ChangeDetectorRef, Component } from '@angular/core';
import { tap } from 'rxjs';
import { CarService } from '../car.service';

@Component({
  selector: 'app-second-example-solution',
  templateUrl: './second-example-solution.component.html',
  styleUrls: ['./second-example-solution.component.css'],
  providers: [CarService],
})
export class SecondExampleSolutionComponent {
  public model$ = this.carService.carModel$.pipe(
    tap(() => this.changeDetector.detectChanges())
  );
  constructor(
    private carService: CarService,
    private changeDetector: ChangeDetectorRef
  ) {}
}
