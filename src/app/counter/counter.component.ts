import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecrementAction, IncrementAction, ResetAction } from '../redux/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ Counter: number }>) {
    this.count$ = this.store.select("Counter");
  }

  increment() {
    this.store.dispatch(IncrementAction());
  }

  decrement() {
    this.store.dispatch(DecrementAction());
  }

  reset() {
    this.store.dispatch(ResetAction());
  }
}
