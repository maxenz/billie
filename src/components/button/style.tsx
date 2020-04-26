import styled from 'styled-components';
import { DarkBlue, Red } from '../../utils/colors';

const SaveButton = styled.button`
    border: 1px solid;
    border-radius: 4px;
    padding: 0.5rem 3rem;
    font-size: 12px;
    color: ${DarkBlue};
    background-color: white;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 1rem;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        color: #666666;
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const CloseButton = styled(SaveButton)`
    color: ${Red};
`;

export { SaveButton, CloseButton };
