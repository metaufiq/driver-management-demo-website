import { Container, LeftIconContainer, StyledInput } from "./TextInput.component.styles";
import { Props } from "./TextInput.component.types";

const TextInput = (props: Props)=>{
  return(
    <Container>
      {props.leftIcon && <LeftIconContainer>
        {props.leftIcon}
      </LeftIconContainer>}
      
      <StyledInput
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Container>
  )
}

export default TextInput;