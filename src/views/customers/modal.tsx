import React from 'react';
import { Classes, NumericInput, FormGroup, Divider, Spinner } from '@blueprintjs/core';
import { ICompany } from '../../store/company/types';
import { SaveButton, CloseButton } from '../../components/button/style';
import { CustomDialogHeader, CustomDialogBody, CustomFooterActions } from './style';
import ErrorMessage from '../../components/errorMessage';
import CustomDialog from './customDialog';

interface IModalProps {
    company: ICompany | null;
    handleCloseModal: () => void;
    handleSave: () => void;
    onChangeBudget: (valueAsNumber: number, valueAsString: string) => void;
    budgetValue: string;
    hasValidationError: boolean;
    isSaving: boolean;
}

const Modal: React.FC<IModalProps> = ({
    company,
    handleCloseModal,
    handleSave,
    onChangeBudget,
    budgetValue,
    hasValidationError,
    isSaving,
}) => {
    const title = `Edit budget for ${company?.name}`;
    return (
        <CustomDialog onClose={handleCloseModal} isOpen={company !== undefined}>
            <CustomDialogHeader className={Classes.DIALOG_HEADER}>{title}</CustomDialogHeader>
            <CustomDialogBody className={Classes.DIALOG_BODY}>
                <div>
                    <FormGroup label="Budget" labelFor="budget" labelInfo="(required)" style={{ margin: 0 }}>
                        <NumericInput
                            id="budget"
                            placeholder="Enter the budget"
                            leftIcon="euro"
                            buttonPosition="none"
                            onValueChange={onChangeBudget}
                            autoFocus={true}
                            value={budgetValue}
                        ></NumericInput>
                        {hasValidationError && (
                            <ErrorMessage message="The value must not be less than the budget spent" />
                        )}
                    </FormGroup>
                </div>
            </CustomDialogBody>
            <Divider />
            <div className={Classes.DIALOG_FOOTER}>
                <CustomFooterActions className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <CloseButton className="button-close" onClick={handleCloseModal}>
                        Close
                    </CloseButton>
                    <SaveButton
                        disabled={!budgetValue || isSaving || isNaN(parseFloat(budgetValue))}
                        onClick={handleSave}
                        className="button-save"
                    >
                        Save
                    </SaveButton>
                    {isSaving && <Spinner size={Spinner.SIZE_SMALL}></Spinner>}
                </CustomFooterActions>
            </div>
        </CustomDialog>
    );
};

export default Modal;
