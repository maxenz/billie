import { ThunkAction } from 'redux-thunk';
import { IRootState } from '.';

export type Thunk = ThunkAction<void, IRootState, void, any>;
