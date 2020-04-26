import React from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';
import StyledNavigationBar from './style';
import Logo from '../../assets/images/billie_logo.svg';

const NavigationBar: React.FC = () => {
    return (
        <StyledNavigationBar>
            <Navbar.Group align={Alignment.LEFT}>
                <img src={Logo} alt="Billie logo" />
            </Navbar.Group>
        </StyledNavigationBar>
    );
};

export default NavigationBar;
