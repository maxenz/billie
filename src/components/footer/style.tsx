import styled from 'styled-components';
import { Black, Red } from '../../utils/colors';

const StyledFooter = styled.div`
    background-color: ${Black};
    color: white;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;

    div {
        margin-right: 10px;
    }
`;

const CompanyAndYear = styled.span`
    margin-right: 10px;
`;

const HeartContainer = styled.span`
    margin: 0 5px;
    color: ${Red};
`;

const MarsImage = styled.img`
    width: 22px;
    height: 32px;
    margin-left: 5px;
`;

export { StyledFooter, CompanyAndYear, HeartContainer, MarsImage };
