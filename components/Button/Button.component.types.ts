export type Type = 'PRIMARY' | 'SECONDARY' | 'NAVIGATION'

export interface Props{
  children: JSX.Element | string,
  onClick?: VoidFunction,
  type?: Type,
  disabled?: boolean
}