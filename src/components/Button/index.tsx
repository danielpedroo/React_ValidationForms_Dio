import { ButtonContainer, ButtonContainerError } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, btnValid, onClick }: IButtonProps) => {
  return (
    <>
      {btnValid ? (
        <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
      ) : (
        <ButtonContainerError disabled>Preencher Campos</ButtonContainerError>
      )}
    </>
  );
};

export default Button;
