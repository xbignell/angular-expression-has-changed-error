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
import { startWith } from 'rxjs/operators';
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

  public ngOnInit() {
    this.formControl.setValue('First value');
  }

  constructor(private inputService: InputService) {}

  private getFormControlValue(): Observable<string> {
    return this.formControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(100)
    );
  }

  private getValue(): Observable<string> {
    return this.formControlValue$.pipe(
      switchMap((value) =>
        iif(() => !!value, this.inputService.value$, of(null))
      ),
      catchError(() => of(null)),
      shareReplay(1)
    );
  }
}
