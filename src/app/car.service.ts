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
  public carModel = new BehaviorSubject<string>('');
  public carName = new BehaviorSubject<string>('');
  public carRegisterDate = new BehaviorSubject<Date>(null);

  public changeModel(model: string): void {
    this.carModel.next(model);
  }

  public changeName(name: string): void {
    this.carName.next(name);
  }

  public changeRegisterDate(date: Date): void {
    this.carRegisterDate.next(date);
  }

  public isCarValid(): Observable<boolean> {
    const [valid$, notValid$] = partition(
      this.getCar(),
      (elements) => !!Object.keys(elements).length
    );

    return merge(valid$.pipe(mapTo(true)), notValid$.pipe(mapTo(false)));
  }

  public getCar(): Observable<Car> {
    return combineLatest({
      model: this.carModel,
      name: this.carName,
      registerDate: this.carRegisterDate,
    });
  }
}
