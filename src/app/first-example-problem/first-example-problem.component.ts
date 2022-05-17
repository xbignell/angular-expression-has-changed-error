import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-example-problem',
  templateUrl: './first-example-problem.component.html',
  styleUrls: ['./first-example-problem.component.css'],
})
export class FirstExampleProblemComponent implements AfterViewInit {
  public loading = true;

  ngAfterViewInit() {
    this.loading = false;
  }
}
