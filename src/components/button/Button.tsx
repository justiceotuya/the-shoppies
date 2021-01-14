import React from 'react'
import { StyledButton } from './Button.style'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    Btntype:string,
    disabled?: boolean;
    onClick: () => void,
}
export const Button:React.FC<IButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
    children, Btntype, onClick, disabled=false, ...props
}) => {
    return (
        <StyledButton
        Btntype={Btntype}
        onClick={onClick}
        disabled={disabled}
        >
            {children}
            </StyledButton>

    )
}
