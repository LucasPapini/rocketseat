import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  varient: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  cursor: pointer;

  //Usando css
  /* ${props => {
    return css`background-color: ${buttonVariants[props.varient]}`
  }} */

  //Usando styled components em um arquivo theme/default.js
  color:${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
`;
