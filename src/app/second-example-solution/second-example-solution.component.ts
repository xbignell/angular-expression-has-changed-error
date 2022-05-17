import { AfterViewInit, Component } from '@angular/core';
import { of } from 'rxjs';
import { SecondExampleProblemService } from '../second-example-problem.service';

@Component({
  selector: 'app-second-example-solution',
  templateUrl: './second-example-solution.component.html',
  styleUrls: ['./second-example-solution.component.css'],
})
export class SecondExampleSolutionComponent implements AfterViewInit {
  public status$ = of(true);

  constructor(
    private secondExampleProblemService: SecondExampleProblemService
  ) {}

  ngAfterViewInit() {
    this.status$ = this.secondExampleProblemService.observable$;
  }
}
