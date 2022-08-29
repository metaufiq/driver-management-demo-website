import { NAVIGATION_MENU } from "../../constants"

export type MenuItemsProps = {
  active: boolean,
}

export type StyledComponentProps = {
  visible: boolean,
}

export type Props = StyledComponentProps & {
  onClose: VoidFunction,
  navigationMenu: typeof NAVIGATION_MENU
}