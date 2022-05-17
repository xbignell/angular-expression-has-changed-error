import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-first-example-solution-2',
  templateUrl: './first-example-solution-2.component.html',
  styleUrls: ['./first-example-solution-2.component.css'],
})
export class FirstExampleSolution2Component implements AfterViewInit {
  public statusChange = new BehaviorSubject(true);

  ngAfterViewInit() {
    this.statusChange.next(false);
  }
}
