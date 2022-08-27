import { NextComponentType, NextPageContext } from "next";

export type User = {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  dob: string,
  phone: string,
  profilePicture: string
}

export type Users = User[]

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type SetUsers = SetState<Users>


export type Component<Props> = NextComponentType<NextPageContext, {}, Props>