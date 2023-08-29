import { createReducer, on } from "@ngrx/store";
import { DecrementAction, IncrementAction, ResetAction } from "../actions/counter.actions";

const initialState = 0;

export const CounterReducer = createReducer(initialState,
    on(IncrementAction, (state) => state + 1),
    on(DecrementAction, (state) => state - 1),
    on(ResetAction, (state) => 0),
)