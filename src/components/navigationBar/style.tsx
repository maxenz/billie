import styled from 'styled-components';
import { Navbar } from '@blueprintjs/core';

const StyledNavigationBar = styled(Navbar)`
    height: 70px;
    display: flex;
    align-items: center;

    img {
        width: 54px;
        height: 50px;
    }
`;

export default StyledNavigationBar;
