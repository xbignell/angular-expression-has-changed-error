import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CarService {
  private carModel = new BehaviorSubject<string>('');
  public carModel$ = this.carModel.asObservable();

  public changeModel(model: string): void {
    this.carModel.next(model);
  }
}
