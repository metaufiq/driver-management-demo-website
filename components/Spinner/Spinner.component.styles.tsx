import styled, { keyframes } from "styled-components";
import { StyledProps } from "./Spinner.component.types";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<StyledProps>`
  width: ${({size})=> size};
  height: ${({size})=>size};
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: ${animation} 1.5s linear infinite;
`