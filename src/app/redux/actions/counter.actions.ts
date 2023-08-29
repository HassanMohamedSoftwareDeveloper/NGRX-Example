import { createAction } from "@ngrx/store";
import { DECREMENT, INCREMENT, RESET } from "../types/counter.types";

export const IncrementAction = createAction(INCREMENT);
export const DecrementAction = createAction(DECREMENT);
export const ResetAction = createAction(RESET);
