import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Props } from "./Button.component.types";

const _getBackgroundColor = ({buttonType, theme}:ThemedStyledProps<Props, DefaultTheme>)=>{
  switch (buttonType) {
    case "PRIMARY":
      return theme.colors.primary
    case "NAVIGATION":
      return 'transparent'
    default:
      return undefined
  }
}

const _getColor = ({buttonType}:ThemedStyledProps<Props, DefaultTheme>)=>{
  switch (buttonType) {
    case "PRIMARY":
      return 'white'
    default:
      return undefined
  }
}

export const Button = styled.button<Props>`
  font-size: 1rem;
  padding: 1rem;
  border: 0;
  text-align: ${(props)=> props.textAlign ?? 'center'};
  display: flex;
  column-gap: 1rem;
  align-items: center;
  background-color: ${_getBackgroundColor};
  color:${_getColor};
  cursor: pointer;
  :disabled{
    cursor: default;
  }
`