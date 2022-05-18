import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  catchError,
  debounceTime,
  delay,
  distinctUntilChanged,
  iif,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { CarService } from '../car.service';

@Component({
  selector: 'app-second-example-problem',
  templateUrl: './second-example-problem.component.html',
  styleUrls: ['./second-example-problem.component.css'],
})
export class SecondExampleProblemComponent implements OnInit {
  public isValid$ = this.carService.isCarValid();

  constructor(private carService: CarService) {}

  public ngOnInit() {
    this.carService.changeValue('Parent');
  }

  private isValid(): Observable<boolean> {}
}
