import styled from 'styled-components';
import { Grey } from '../../utils/colors';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    border-spacing: 0;
    width: 70%;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
    }
`;

const RowItem = styled.div`
    flex-grow: 1;
    width: 20%;
    overflow: hidden;
    list-style: none;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    align-items: center;
    height: 50px;
    font-weight: 300;
    font-size: 1.1em;
    cursor: pointer;
    > h1,
    > h2,
    > h3,
    > h4 {
        margin: 0;
    }

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const HeaderRowItem = styled(RowItem)`
    font-weight: 700;

    @media (max-width: 768px) {
        margin-bottom: 5px;
    }
`;

const HeaderListRow = styled.div`
    display: flex;
    width: 100%;
`;

const ListRow = styled(HeaderListRow)`
    &:hover {
        background-color: ${Grey};
    }
`;

export { List, ListRow, HeaderListRow, RowItem, HeaderRowItem };
