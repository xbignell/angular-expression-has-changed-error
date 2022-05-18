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
import { InputService } from '../input.service';

@Component({
  selector: 'app-second-example-problem',
  templateUrl: './second-example-problem.component.html',
  styleUrls: ['./second-example-problem.component.css'],
})
export class SecondExampleProblemComponent implements OnInit {
  public formControl = new FormControl();
  private formControlValue$ = this.getFormControlValue();
  public value$ = this.getValue();

  constructor(private inputService: InputService) {}

  ngOnInit() {
    this.inputService.changeValue('Testing');
  }

  private getFormControlValue(): Observable<string> {
    return this.formControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    );
  }

  private getValue(): Observable<string> {
    return this.formControlValue$.pipe(
      tap(console.log),
      switchMap((value) =>
        iif(() => !!value && value == 'OK', this.inputService.value$, of(null))
      ),
      catchError(() => of(null)),
      shareReplay(1)
    );
  }
}
