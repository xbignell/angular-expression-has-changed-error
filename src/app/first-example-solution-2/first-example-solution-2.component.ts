import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

@Component({
  selector: 'app-first-example-solution-2',
  templateUrl: './first-example-solution-2.component.html',
  styleUrls: ['./first-example-solution-2.component.css'],
})
export class FirstExampleSolution2Component implements AfterViewInit {
  public loading = new BehaviorSubject(true);
  public loading$ = this.loading.asObservable().pipe(delay(0));

  ngAfterViewInit() {
    this.loading.next(false);
  }
}
