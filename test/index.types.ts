export type Props = any

export type Config<Props> = {
  props?: Props,
  desc: string
}

export type RoundedType = 'left-only' | 'right-only'

export type Configs<Props> = Config<Props>[]