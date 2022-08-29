import styled from "styled-components";
import { Props } from "./Avatar.component.types";

export const Avatar = styled.img<Props>`
  border-radius: 50%;
  padding: 1rem;
  max-height: ${({height})=> height ?? undefined};
  max-width: ${({width})=> width ?? undefined};
`