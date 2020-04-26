import React from 'react';
import { HeaderRowItem, HeaderListRow } from './styled';

interface IHeaderProps {
    titles: Array<string>;
}

const ListHeader: React.FC<IHeaderProps> = ({ titles }) => {
    return (
        <HeaderListRow>
            {titles.map((title) => (
                <HeaderRowItem key={title}>{title}</HeaderRowItem>
            ))}
        </HeaderListRow>
    );
};

export default ListHeader;
