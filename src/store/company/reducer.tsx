import { ICompanyState, CompanyActions } from './types';
import { Constants } from './constants';

const init: ICompanyState = {
    list: {},
    isLoading: false,
    isSaving: false,
    error: false,
    selectedCompanyId: 0,
    success: false,
    errorUpdate: false,
};

export function companyReducer(state: ICompanyState = init, action: CompanyActions): ICompanyState {
    switch (action.type) {
        case Constants.GET_COMPANIES_OK: {
            return {
                ...state,
                list: action.payload.list,
            };
        }
        case Constants.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        }
        case Constants.GET_COMPANIES_ERROR: {
            return {
                ...state,
                error: action.payload.hasError,
            };
        }
        case Constants.UPDATE_BUDGET_OK: {
            return {
                ...state,
                list: { ...state.list, [action.payload.company.id]: action.payload.company },
                success: true,
            };
        }
        case Constants.UPDATE_BUDGET_ERROR: {
            return {
                ...state,
                errorUpdate: action.payload.hasError,
            };
        }
        case Constants.SET_SELECTED_COMPANY_ID: {
            return {
                ...state,
                selectedCompanyId: action.payload.selectedCompanyId,
            };
        }
        case Constants.SET_IS_SAVING: {
            return {
                ...state,
                isSaving: action.payload.isSaving,
            };
        }
        case Constants.SET_UPDATE_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
            };
        }
        default:
            return state;
    }
}
