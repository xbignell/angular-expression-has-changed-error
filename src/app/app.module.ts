import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstExampleProblemComponent } from './first-example-problem/first-example-problem.component';
import { FirstExampleSolutionComponent } from './first-example-solution/first-example-solution.component';
import { FirstExampleSolution2Component } from './first-example-solution-2/first-example-solution-2.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    FirstExampleProblemComponent,
    FirstExampleSolutionComponent,
    FirstExampleSolution2Component,
    SpinnerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
