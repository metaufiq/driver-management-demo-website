import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

export type Props = {
  placeholder: string,
  id?: string,
  type: HTMLInputTypeAttribute,
  leftIcon?: JSX.Element,
  onChange: ChangeEventHandler<HTMLInputElement>
}