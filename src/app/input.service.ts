import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  private value = new BehaviorSubject('First step');
  public value$ = this.value.asObservable();

  public changeValue(value: string): void {
    this.value.next(value);
  }
}
