import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  partition,
  merge,
} from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Car } from './config/car.config';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carModel = new BehaviorSubject<string>('');
  public carModel$ = this.carModel.asObservable();

  public changeModel(model: string): void {
    this.carModel.next(model);
  }

  public getModel(): Observable<string> {
    return this.carModel.asObservable();
  }
}
