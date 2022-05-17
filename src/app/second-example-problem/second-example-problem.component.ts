import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecondExampleProblemService } from '../second-example-problem.service';

@Component({
  selector: 'app-second-example-problem',
  templateUrl: './second-example-problem.component.html',
  styleUrls: ['./second-example-problem.component.css'],
})
export class SecondExampleProblemComponent implements AfterViewInit, OnDestroy {
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
