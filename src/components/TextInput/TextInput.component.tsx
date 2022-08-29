import { ReactElement } from "react";

import { Component } from "../../../index.types";
import { Container, LeftIconContainer, StyledInput } from "./TextInput.component.styles";
import { Props } from "./TextInput.component.types";

/**
 * Text Input components
 * @param {Props} props component props 
 * @returns {ReactElement} Text Input components
 */
const TextInput:Component<Props> = (props: Props): ReactElement=>{
  return(
    <Container>
      {props.leftIcon && <LeftIconContainer>
        {props.leftIcon}
      </LeftIconContainer>}
      
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Container>
  )
}

export default TextInput;