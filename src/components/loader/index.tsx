import React from 'react';
import { Spinner, Intent } from '@blueprintjs/core';
import { Title } from '../../views/customers/style';
import StyledLoader from './style';

const Loader: React.FC = () => {
    return (
        <StyledLoader>
            <Title>Loading customers...</Title>
            <Spinner intent={Intent.DANGER} size={Spinner.SIZE_LARGE} />
        </StyledLoader>
    );
};

export default Loader;
