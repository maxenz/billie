import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../store';
import { ICompany } from '../../store/company/types';
import * as actions from '../../store/company/async-actions';
import * as actionCreators from '../../store/company/actions';
import Loader from '../../components/loader';
import { ViewContainer, Title } from './style';
import { AppToaster } from '../../utils/toastr';
import { Intent, Alert } from '@blueprintjs/core';
import Modal from './modal';
import CompaniesList from './companiesList';
import { GET_COMPANIES_ERROR, UPDATE_BUDGET_ERROR, UPDATE_BUDGET_SUCCESS } from '../../constants';
import { getFormattedCurrencyValue } from '../../utils/numbers';

const CustomersView: React.FC = () => {
    const dispatch = useDispatch();
    const companies = useSelector<IRootState, any>((state) => state.company.list);
    const isLoading = useSelector<IRootState, boolean>((state) => state.company.isLoading);
    const isSaving = useSelector<IRootState, boolean>((state) => state.company.isSaving);
    const error = useSelector<IRootState, boolean>((state) => state.company.error);
    const errorUpdate = useSelector<IRootState, boolean>((state) => state.company.errorUpdate);
    const success = useSelector<IRootState, boolean>((state) => state.company.success);
    const selectedCompanyId = useSelector<IRootState, number>((state) => state.company.selectedCompanyId);
    const [confirmationAlertIsOpen, setConfirmationAlertIsOpen] = useState<boolean>(false);
    const [budget, setBudget] = useState<string>('');
    const [hasValidationError, setHasValidationError] = useState<boolean>(false);
    const selectedCompany = companies[selectedCompanyId];

    useEffect(() => {
        dispatch(actions.getCompanies());
    }, []);

    useEffect(() => {
        if (error) {
            if (error) {
                showToastr(GET_COMPANIES_ERROR, Intent.DANGER);
            }
        }
    }, [error]);

    useEffect(() => {
        if (errorUpdate) {
            showToastr(UPDATE_BUDGET_ERROR, Intent.DANGER);
        }
    }, [errorUpdate]);

    useEffect(() => {
        if (success) {
            AppToaster.show({
                message: UPDATE_BUDGET_SUCCESS,
                intent: Intent.SUCCESS,
            });
        }
    }, [success]);

    const closeModal = () => dispatch(actionCreators.setSelectedCompanyId(0));
    const openModal = (company: ICompany) => {
        const formattedBudget = parseFloat(company.budget.toString()).toFixed(2);
        setBudget(formattedBudget);
        dispatch(actionCreators.setSelectedCompanyId(company.id));
    };

    const showToastr = (message: string, intent: any) => {
        AppToaster.show({
            message,
            intent,
        });
    };

    const onChangeBudget = (_valueAsNumber: number, valueAsString: string) => {
        setHasValidationError(false);
        setBudget(valueAsString);
    };

    const handleSave = () => {
        const company = selectedCompany;
        if (company) {
            if (!budget || parseFloat(budget) < company.budget_spent) {
                setHasValidationError(true);
            } else {
                setConfirmationAlertIsOpen(true);
            }
        }
    };

    const handleConfirmSave = () => {
        setConfirmationAlertIsOpen(false);
        const company = companies[selectedCompanyId];
        dispatch(actions.updateBudget(company.id, budget));
    };

    return (
        <ViewContainer>
            {isLoading ? (
                <Loader />
            ) : (
                !error && (
                    <div>
                        <Title>Martian Customers</Title>
                        <CompaniesList companies={companies} openModal={openModal} />
                    </div>
                )
            )}
            <Modal
                company={selectedCompany}
                handleCloseModal={closeModal}
                handleSave={handleSave}
                onChangeBudget={onChangeBudget}
                budgetValue={budget}
                hasValidationError={hasValidationError}
                isSaving={isSaving}
            />
            <Alert
                isOpen={confirmationAlertIsOpen}
                onConfirm={handleConfirmSave}
                onCancel={() => setConfirmationAlertIsOpen(false)}
                cancelButtonText="Cancel"
            >
                {' '}
                <p>
                    Are you sure you want to change the budget of <b>{selectedCompany?.name}</b> to
                    <b> {getFormattedCurrencyValue(parseFloat(budget))}</b>?
                </p>
            </Alert>
        </ViewContainer>
    );
};

export default CustomersView;
