import { StyledInput } from "./TextInput.component.styles";
import { Props } from "./TextInput.component.types";

const TextInput = (props: Props)=>{
  return(
    <StyledInput
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default TextInput;