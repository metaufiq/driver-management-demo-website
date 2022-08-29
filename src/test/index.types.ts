import { DefaultTheme } from "styled-components"

export type Props = any

export type Config<Props> = {
  props?: Props,
  desc: string,
  useTheme?: boolean,
  theme?: DefaultTheme,
  beforeTest?: VoidFunction
}

export type RoundedType = 'left-only' | 'right-only'

export type Configs<Props> = Config<Props>[]