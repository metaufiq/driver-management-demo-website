import { User } from "../../index.types";


export type FilterKey =  'firstName';

export type Params = {
  initialValue: User[]
  searchInput?: string,
}

