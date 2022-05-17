import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstExampleProblemComponent } from './first-example-problem/first-example-problem.component';
import { FirstExampleSolutionComponent } from './first-example-solution/first-example-solution.component';
import { SecondExampleProblemComponent } from './second-example-problem/second-example-problem.component';
import { CommonModule } from '@angular/common';
import { SecondExampleSolutionComponent } from './second-example-solution/second-example-solution.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    FirstExampleProblemComponent,
    FirstExampleSolutionComponent,
    SecondExampleProblemComponent,
    SecondExampleSolutionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
