import styled from "styled-components";
import { Props } from "./Button.component.types";

export const StyledButton = styled.button<Props>`
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;
  border: 0;
  text-align: ${({textAlign})=> textAlign ?? 'center'};
  display: flex;
  column-gap: 1rem;
  align-items: center;
  cursor: pointer;
`

export const PrimaryButton = styled(StyledButton)<Props>`
  background-color: #ff453b;
  color: white;
  border-radius: 0.125rem;
`

export const NavigationButton = styled(StyledButton)<Props>`
  font-size: 1rem;
  background-color: transparent;
`