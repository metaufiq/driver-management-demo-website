export type StyledComponentProps = {
  visible: boolean,
}

export type Props = StyledComponentProps & {
  onPressBurger: VoidFunction,
  userImage: string, 
}