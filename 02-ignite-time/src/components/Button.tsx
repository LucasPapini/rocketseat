import { ButtonContainer, ButtonVariant } from "./Button.styles.ts";

interface ButtonProps {
  varient?: ButtonVariant
}
export function Button({ varient = 'primary' }: ButtonProps) {
  return (
    <>
      <ButtonContainer varient={varient}>
        Enviar
      </ButtonContainer>
    </>
  );
}
