import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { companyReducer } from './company/reducer';
import { ICompanyState } from './company/types';

export interface IRootState {
    company: ICompanyState;
}

const logger = createLogger({});

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        company: companyReducer,
    }),
    applyMiddleware(thunk, logger),
);

export default store;
