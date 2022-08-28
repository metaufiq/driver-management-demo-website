import { useEffect, useState } from "react";
import { USER_PER_PAGE } from "../../constants";

import { SetUsers, Users } from "../../index.types";
import { User } from "../../index.types";
import { FilterKey, Params } from "./useUsers.hooks.types";


const FILTER_KEYS:FilterKey[] = ["firstName"];

export const useInnit = (initialValue: Params['initialValue'], setUsers: SetUsers)=>{
  useEffect(()=>{
    setUsers(initialValue.slice(0,5))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);
}

export const filterByKeys = (searchInput: string)=>(user:User) => {
  return FILTER_KEYS.some(key=> {
    let data = user[key]

    const lowerCaseData = data.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();

    return lowerCaseData.includes(lowerCaseSearchInput)
  })
}

export const useSearch = ({searchInput, initialValue}: Params, setUsers: SetUsers)=>{
  useEffect(()=>{
    const data = !searchInput ? initialValue : initialValue.filter(filterByKeys(searchInput));
    setUsers(data.slice(0,5))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])
}

export const usePage = ({pageIndex, initialValue}: Params, setUsers: SetUsers)=>{

  useEffect(()=>{
    if (pageIndex === 1) {
      setUsers(initialValue.slice(0,5))
      return
    }
    const sliceForm = (pageIndex-1)*USER_PER_PAGE-1;
    const sliceEnd = pageIndex*USER_PER_PAGE-1;
    const newUsers = initialValue.slice(sliceForm, sliceEnd);

    setUsers(newUsers)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex])
}

const useUsers = (params: Params)=>{
  const [users, setUsers] = useState<Users>([]);

  useInnit(params.initialValue, setUsers)
  useSearch(params, setUsers)
  usePage(params, setUsers)

  return {users}
}

export default useUsers;