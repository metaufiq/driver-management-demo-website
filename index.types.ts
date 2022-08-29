import { NextComponentType, NextPageContext } from "next";

import { User as UserFromAPI } from "./src/api/randomUser/randomUser.api.types";

export type User = {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  dob: string,
  phone: string,
  picture: UserFromAPI['picture']
}

export type Users = User[]

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type SetUsers = SetState<Users>


export type Component<Props> = NextComponentType<NextPageContext, {}, Props>