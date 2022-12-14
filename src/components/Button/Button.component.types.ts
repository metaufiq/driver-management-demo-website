export type Type = 'PRIMARY' | 'NAVIGATION';

export type Props = {
  textAlign?: 'start' | 'end';
  buttonType?: Type;
}

export type ColorStyle = string | undefined