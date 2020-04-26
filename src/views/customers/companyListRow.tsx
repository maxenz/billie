import React from 'react';
import { ListRow, RowItem } from '../../components/list/styled';
import { ICompany } from '../../store/company/types';
import { getFormattedCurrencyValue, currencyRest } from '../../utils/numbers';

interface ICompanyListRowProps {
    company: ICompany;
    openModal: (company: ICompany) => void;
}

const CompanyListRow: React.FC<ICompanyListRowProps> = ({ company, openModal }) => {
    const currency = (val: number) => getFormattedCurrencyValue(val);
    const getBudgetLeft = (company: ICompany) => currency(currencyRest(company.budget, company.budget_spent));

    return (
        <ListRow key={company.id} onClick={() => openModal(company)}>
            <RowItem>{company.name}</RowItem>
            <RowItem>{currency(company.budget)}</RowItem>
            <RowItem>{currency(company.budget_spent)}</RowItem>
            <RowItem>{getBudgetLeft(company)}</RowItem>
            <RowItem>{company.first_purchased_date}</RowItem>
        </ListRow>
    );
};

export default CompanyListRow;
