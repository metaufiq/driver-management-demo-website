import { SetState } from "../../../index.types"

export type SetVisible = SetState<boolean>

export type Props = {
  children: JSX.Element,
}

export type StyledComponentProps = {
  visible: boolean,
}

export type MenuItems = {
  active: boolean,
}