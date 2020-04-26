import React from 'react';
import { List } from '../../components/list/styled';
import ListHeader from '../../components/list/header';
import { listTitles } from './listTitles';
import { ICompany } from '../../store/company/types';
import CompanyListRow from './companyListRow';

interface ICompaniesListProps {
    companies: any;
    openModal: (company: ICompany) => void;
}

const CompaniesList: React.FC<ICompaniesListProps> = ({ companies, openModal }) => {
    return (
        <List>
            <ListHeader titles={listTitles} />
            {Object.keys(companies).map((id) => (
                <CompanyListRow key={id} openModal={openModal} company={companies[id]} />
            ))}
        </List>
    );
};

export default CompaniesList;
