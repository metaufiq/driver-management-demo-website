import { Component } from "../../index.types";
import { Props } from "./Button.component.types";

const Button: Component<Props> = ({onClick, children, disabled})=>{
  return(
    <button 
      type="button"
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;