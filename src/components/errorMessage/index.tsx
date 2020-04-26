import React from 'react';
import { Callout, Intent } from '@blueprintjs/core';
import { StyledErrorMessageContainer } from './style';

interface IErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
    return (
        <StyledErrorMessageContainer>
            <Callout intent={Intent.DANGER}>{message}</Callout>
        </StyledErrorMessageContainer>
    );
};

export default ErrorMessage;
