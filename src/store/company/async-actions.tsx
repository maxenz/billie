import {
    setCompaniesList,
    setCompaniesAreLoading,
    setCompaniesError,
    setUpdateBudgetError,
    setUpdateBudget,
    setSelectedCompanyId,
    setUpdateBudgetIsSaving,
    setSuccessUpdate,
} from './actions';
import { Thunk } from '../types';
import arrayToObject from '../../utils/arrayToObject';

export const getCompanies = (): Thunk => async (dispatch) => {
    try {
        dispatch(setCompaniesAreLoading(true));
        dispatch(setCompaniesError(false));
        const response = await fetch('/api/companies');
        const body = await response.json();
        const obj = arrayToObject(body.companies);
        dispatch(setCompaniesList(obj));
    } catch (e) {
        dispatch(setCompaniesError(true));
    } finally {
        dispatch(setCompaniesAreLoading(false));
    }
};

export const updateBudget = (id: number, budget: string): Thunk => async (dispatch) => {
    try {
        dispatch(setUpdateBudgetIsSaving(true));
        dispatch(setSuccessUpdate(false));
        dispatch(setUpdateBudgetError(false));
        const response = await fetch(`/api/companies/${id}`, { method: 'PATCH', body: JSON.stringify({ budget }) });
        const body = await response.json();
        dispatch(setUpdateBudget(body.company));
        dispatch(setSelectedCompanyId(0));
    } catch (e) {
        dispatch(setUpdateBudgetError(true));
    } finally {
        dispatch(setUpdateBudgetIsSaving(false));
    }
};
