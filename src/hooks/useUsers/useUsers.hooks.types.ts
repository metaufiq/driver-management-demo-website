import { User, Users } from "@dmd/types";


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

