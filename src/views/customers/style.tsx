import styled from 'styled-components';
import { Dialog } from '@blueprintjs/core';

const ViewContainer = styled.div`
    padding-bottom: 70px;
`;

const Title = styled.h2`
    font-family: Roboto;
    text-align: center;
    font-size: 2.5em;
`;

const CustomDialogHeader = styled.div`
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
`;

const CustomDialogBody = styled.div`
    background-color: white;
`;

const StyledCustomDialog = styled(Dialog)`
    background-color: white;
    @media (max-width: 768px) {
        width: 300px;
    }
`;

const CustomFooterActions = styled.div`
    justify-content: center;
    margin-top: 15px;
`;

export { ViewContainer, Title, CustomDialogHeader, CustomDialogBody, CustomFooterActions, StyledCustomDialog };
