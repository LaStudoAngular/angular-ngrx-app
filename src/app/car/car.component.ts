import { Component, Input } from '@angular/core';
import { Car } from '../models/car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { BuyCar, DeleteCar } from '../store/actions/car.actions';

@Component({
  selector: 'nx-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent {
  @Input() car: Car;

  constructor( private store: Store<AppState> ) { }

  onBuy(): void {
    this.store.dispatch(new BuyCar(this.car.id));
  }

  onDelete(): void {
    this.store.dispatch(new DeleteCar(this.car.id));
  }

}
