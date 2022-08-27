import { Props } from "./TextInput.component.types";

const TextInput = (props: Props)=>{
  return(
    <input 
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default TextInput;