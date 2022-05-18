import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstExampleProblemComponent } from './first-example-problem/first-example-problem.component';
import { FirstExampleSolutionComponent } from './first-example-solution/first-example-solution.component';
import { FirstExampleSolution2Component } from './first-example-solution-2/first-example-solution-2.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SecondExampleProblemComponent } from './second-example-problem/second-example-problem.component';
import { SecondExampleProblemChildrenComponent } from './second-example-problem/second-example-problem-children/second-example-problem-children.component';
import { SecondExampleSolutionComponent } from './second-example-solution/second-example-solution.component';
import { SecondExampleSolutionChildrenComponent } from './second-example-solution/second-example-solution-children/second-example-solution-children.component';
import { SecondExampleSolution2Component } from './second-example-solution-2/second-example-solution-2.component';
import { SecondExampleSolution2ChildrenComponent } from './second-example-solution-2/second-example-solution-2-children/second-example-solution-2-children.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    FirstExampleProblemComponent,
    FirstExampleSolutionComponent,
    FirstExampleSolution2Component,
    SpinnerComponent,
    SecondExampleProblemComponent,
    SecondExampleProblemChildrenComponent,
    SecondExampleSolutionComponent,
    SecondExampleSolutionChildrenComponent,
    SecondExampleSolution2Component,
    SecondExampleSolution2ChildrenComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
