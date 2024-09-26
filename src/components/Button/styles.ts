import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const ButtonContainerError = styled.button`
  width: 100%;
  height: 42px;
  background-color: #E0E0E0;
  color: #fff;

  border: 1px solid #E0E0E0;
  border-radius: 21px;

  &:hover {
    cursor: pointer;
  }
`;
