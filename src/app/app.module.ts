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

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    FirstExampleProblemComponent,
    FirstExampleSolutionComponent,
    FirstExampleSolution2Component,
    SpinnerComponent,
    SecondExampleProblemComponent,
    SecondExampleProblemChildrenComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
