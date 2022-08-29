import { User, Users } from "../../../index.types";


export type FilterKey =  'firstName';

export type Params = {
  initialValue: User[]
  searchInput?: string,
  pageIndex: number
}

export type HooksData = {
  users: Users;
}

export type FilterUserFunction = (user:User)=>boolean

