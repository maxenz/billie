import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ICompany {
    id: number;
    name: string;
    budget: number;
    budget_spent: number;
    first_purchased_date: Date;
}

export interface ICompanyState {
    list: any;
    isLoading: boolean;
    isSaving: boolean;
    error: boolean;
    selectedCompanyId: number;
    success: boolean;
    errorUpdate: boolean;
}

export type CompanyActions = ActionType<typeof actions>;
