import { action } from 'typesafe-actions';
import { Constants } from './constants';
import { ICompany } from './types';

export function setCompaniesList(list: any) {
    return action(Constants.GET_COMPANIES_OK, { list });
}

export function setCompaniesError(hasError: boolean) {
    return action(Constants.GET_COMPANIES_ERROR, { hasError });
}

export function setCompaniesAreLoading(isLoading: boolean) {
    return action(Constants.SET_IS_LOADING, { isLoading });
}

export function setUpdateBudget(company: ICompany) {
    return action(Constants.UPDATE_BUDGET_OK, { company });
}

export function setUpdateBudgetIsSaving(isSaving: boolean) {
    return action(Constants.SET_IS_SAVING, { isSaving });
}

export function setUpdateBudgetError(hasError: boolean) {
    return action(Constants.UPDATE_BUDGET_ERROR, { hasError });
}

export function setSelectedCompanyId(id: number) {
    return action(Constants.SET_SELECTED_COMPANY_ID, { selectedCompanyId: id });
}

export function setSuccessUpdate(success: boolean) {
    return action(Constants.SET_UPDATE_SUCCESS, { success });
}
