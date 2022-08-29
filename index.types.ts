import { NextComponentType, NextPageContext } from "next";

export type UserFromAPI = {
  name: {
    first: string,
    last: string
  },
  email: string,
  login: {
    username: string,
  },
  dob: {
    date: string
  },
  phone: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}

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