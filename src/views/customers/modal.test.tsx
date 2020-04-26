import React from 'react';
import { NumericInput } from '@blueprintjs/core';
import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import Modal from './modal';
import ErrorMessage from '../../components/errorMessage';

const baseCompany = {
    id: 4,
    name: 'Amazon',
    budget: 1046495.42,
    budget_spent: 120345.33,
    first_purchased_date: new Date(2018, 11, 24, 10, 33, 30, 0),
};

const buildWrapper = ({
    company,
    isSaving,
    hasValidationError,
    budgetValue,
    onChangeBudget,
    handleCloseModal,
    handleSave,
}: any = {}) => {
    const usedCompany = company || baseCompany;
    return mount(
        <Modal
            company={usedCompany}
            isSaving={isSaving || false}
            hasValidationError={hasValidationError || false}
            handleSave={handleSave || jest.fn()}
            onChangeBudget={onChangeBudget || jest.fn()}
            handleCloseModal={handleCloseModal || jest.fn()}
            budgetValue={budgetValue || usedCompany.budget}
        />,
    );
};

let wrapper: any = null;
describe('Component: Modal', () => {
    beforeEach(() => {
        wrapper = buildWrapper({});
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('should have a title for the select company to edit', () => {
        const title = wrapper.find('div.bp3-dialog-header');
        const companyName = wrapper.prop('company').name;
        expect(title).toHaveLength(1);
        expect(title.text()).toEqual(`Edit budget for ${companyName}`);
    });

    test('should have an input for budget', () => {
        const input = wrapper.find(NumericInput);
        expect(input).toHaveLength(1);
    });

    test('should have an input budget with company budget value prefilled', () => {
        wrapper = buildWrapper();
        const input = wrapper.find(NumericInput);
        const { budget } = wrapper.prop('company');

        expect(input.props().value).toEqual(budget);
    });

    test('should have save and close buttons', () => {
        const saveButton = wrapper.find('button.button-save');
        const closeButton = wrapper.find('button.button-close');
        expect(saveButton).toHaveLength(1);
        expect(closeButton).toHaveLength(1);
        expect(saveButton.text()).toEqual('Save');
        expect(closeButton.text()).toEqual('Close');
    });

    test('should call onChangeBudget when changing value budget input', () => {
        const onChangeBudget = jest.fn();
        wrapper = buildWrapper({ onChangeBudget });
        const event = { target: { value: '999' } };
        const input = wrapper.find('input#budget');
        input.simulate('change', event);
        expect(onChangeBudget).toHaveBeenCalledWith(999, '999', input.instance());
    });

    test('should show an error if hasErrorValidation', () => {
        wrapper = buildWrapper({ hasValidationError: true });
        const errorMessage = wrapper.find(ErrorMessage);
        expect(errorMessage).toHaveLength(1);
    });

    test('should show a spinner if loading property is true', () => {
        wrapper = buildWrapper({ isSaving: true });
        const spinner = wrapper.find('.bp3-spinner');
        expect(spinner).toHaveLength(1);
    });

    test('should disable save button if value is incorrect', () => {
        wrapper = buildWrapper({ budgetValue: 'billie' });
        const saveButton = wrapper.find('button.button-save');
        expect(saveButton.props().disabled).toBeTruthy();
    });

    test('should disable save button if is saving', () => {
        wrapper = buildWrapper({ isSaving: true });
        const saveButton = wrapper.find('button.button-save');
        expect(saveButton.props().disabled).toBeTruthy();
    });

    test('should call onCloseModal when clicking close button', () => {
        const handleSave = jest.fn();
        const handleCloseModal = jest.fn();
        wrapper = buildWrapper({ handleSave, handleCloseModal });
        const closeButton = wrapper.find('button.button-close');
        closeButton.simulate('click');
        expect(handleCloseModal).toHaveBeenCalledTimes(1);
        expect(handleSave).not.toHaveBeenCalled();
    });

    test('should call handleSave when clicking save button', () => {
        const handleSave = jest.fn();
        const handleCloseModal = jest.fn();
        wrapper = buildWrapper({ handleSave, handleCloseModal });
        const saveButton = wrapper.find('button.button-save');
        saveButton.simulate('click');
        expect(handleSave).toHaveBeenCalledTimes(1);
        expect(handleCloseModal).not.toHaveBeenCalled();
    });
});
