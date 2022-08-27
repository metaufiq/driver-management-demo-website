import { NextComponentType, NextPageContext } from "next";

export type User = {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  dob: string,
  phone: string
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Component<Props> = NextComponentType<NextPageContext, {}, Props>