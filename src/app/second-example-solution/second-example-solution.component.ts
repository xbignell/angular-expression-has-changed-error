import { AfterViewInit, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecondExampleProblemService } from '../second-example-problem.service';

@Component({
  selector: 'app-second-example-solution',
  templateUrl: './second-example-solution.component.html',
  styleUrls: ['./second-example-solution.component.css'],
})
export class SecondExampleSolutionComponent implements AfterViewInit {
  public status = true;

  private subscription = new Subscription();

  constructor(
    private secondExampleProblemService: SecondExampleProblemService
  ) {}

  ngAfterViewInit() {
    this.subscription.add(
      this.secondExampleProblemService.observable$.subscribe((status) => {
        this.status = status;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
