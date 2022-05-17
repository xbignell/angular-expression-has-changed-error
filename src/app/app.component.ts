import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public firstExampleProblem = false;
  public firstExampleSolution = false;

  public secondExampleProblem = false;
  public secondExampleSolution = false;

  public showFirstExampleProblem() {
    this.firstExampleProblem = !this.firstExampleProblem;
  }

  public showFirstExampleSolution() {
    this.firstExampleSolution = !this.firstExampleSolution;
  }

  public showSecondExampleProblem() {
    this.secondExampleProblem = !this.secondExampleProblem;
  }

  public showSecondExampleSolution() {
    this.secondExampleSolution = !this.secondExampleSolution;
  }
}
