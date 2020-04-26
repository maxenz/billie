import React from 'react';
import { StyledCustomDialog } from './style';

interface ICustomDialogProps {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
}

const CustomDialog: React.FC<ICustomDialogProps> = ({ children, onClose, isOpen }) => {
    return (
        <StyledCustomDialog onClose={onClose} isOpen={isOpen}>
            {children}
        </StyledCustomDialog>
    );
};

export default CustomDialog;
