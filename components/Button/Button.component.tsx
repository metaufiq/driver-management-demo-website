import { Component } from "../../index.types";
import { NavigationButton, PrimaryButton, StyledButton } from "./Button.component.styles";
import { Props } from "./Button.component.types";

const _getButtonType = (type:Props['type'])=>{
  switch (type) {
    case 'NAVIGATION':
      return NavigationButton
  
    case 'PRIMARY':
      return PrimaryButton
  
    default:
      return StyledButton
      break;
  }
}

const Button: Component<Props> = ({onClick, children, disabled, type})=>{
  const Button = _getButtonType(type)
  return(
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default Button;