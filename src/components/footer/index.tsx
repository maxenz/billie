import React from 'react';
import { StyledFooter, CompanyAndYear, HeartContainer, MarsImage } from './style';
import MarsLogo from '../../assets/images/mars-clipart.png';

const Footer: React.FC = () => {
    const futureYear = new Date().getFullYear() + 100;
    return (
        <StyledFooter>
            <>
                <CompanyAndYear>Billie © - {futureYear}.</CompanyAndYear>
                With
                <HeartContainer> &hearts; </HeartContainer>
                from
                <MarsImage alt="Mars" src={MarsLogo} />
            </>
        </StyledFooter>
    );
};

export default Footer;
