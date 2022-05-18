import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public firstExampleProblem = false;
  public firstExampleSolution = false;
  public firstExampleSolution2 = false;

  public secondExampleProblem = false;
  public secondExampleSolution = false;
  public secondExampleSolution2 = false;

  public showFirstExampleProblem() {
    this.firstExampleProblem = !this.firstExampleProblem;
  }

  public showFirstExampleSolution() {
    this.firstExampleSolution = !this.firstExampleSolution;
  }

  public showFirstExampleSolution2() {
    this.firstExampleSolution2 = !this.firstExampleSolution2;
  }

  public showSecondExampleProblem() {
    this.secondExampleProblem = !this.secondExampleProblem;
  }

  public showSecondExampleSolution() {
    this.secondExampleSolution = !this.secondExampleSolution;
  }

  public showSecondExampleSolution2() {
    this.secondExampleSolution2 = !this.secondExampleSolution2;
  }
}
