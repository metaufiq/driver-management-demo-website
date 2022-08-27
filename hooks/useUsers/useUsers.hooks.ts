import { useEffect, useState } from "react";

import { SetUsers, Users } from "../../index.types";
import { User } from "../../index.types";
import { FilterKey, Params } from "./useUsers.hooks.types";


const FILTER_KEYS:FilterKey[] = ["firstName"];
const useInnit = (initialValue: Params['initialValue'], setUsers: SetUsers)=>{
  useEffect(()=>{
    setUsers(initialValue)
  }, [initialValue]);
}

const filterByKeys = (searchInput: string)=>(user:User) => {
  return FILTER_KEYS.some(key=> {
    let data = user[key]

    const lowerCaseData = data.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();

    return lowerCaseData.includes(lowerCaseSearchInput)
  })
}

const useSearch = ({searchInput, initialValue}: Params, setUsers: SetUsers)=>{

  useEffect(()=>{
    
    setUsers(users=> {
      if (!searchInput) return initialValue
      return users.filter(filterByKeys(searchInput))
    })
  }, [searchInput])
}

const useUsers = (params: Params)=>{
  const [users, setUsers] = useState<Users>([]);

  useInnit(params.initialValue, setUsers)
  useSearch(params, setUsers)

  return {users}
}

export default useUsers;