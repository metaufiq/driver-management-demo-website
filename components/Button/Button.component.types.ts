export type Type = 'PRIMARY' | 'SECONDARY'

export interface Props{
  children: JSX.Element | string,
  onClick?: VoidFunction,
  type?: Type,
  disabled?: boolean
}