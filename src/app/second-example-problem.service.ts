import { Injectable } from '@angular/core';
import { BehaviorSubject, mapTo } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecondExampleProblemService {
  private observable = new BehaviorSubject(false);
  public observable$ = this.observable.asObservable();

  public changeObservable(observableStatus: boolean): void {
    this.observable.next(observableStatus);
  }
}
