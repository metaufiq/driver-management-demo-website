import { useEffect, useState } from "react";
import { USER_PER_PAGE } from "../../constants";

import { SetUsers, Users } from "../../index.types";
import { User } from "../../index.types";
import { FilterKey, Params } from "./useUsers.hooks.types";


const FILTER_KEYS:FilterKey[] = ["firstName"];
const useInnit = (initialValue: Params['initialValue'], setUsers: SetUsers)=>{
  useEffect(()=>{
    setUsers(initialValue.slice(0,5))
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
    const data = !searchInput ? initialValue : initialValue.filter(filterByKeys(searchInput));
    setUsers(data.slice(0,5))
  }, [searchInput])
}

const usePage = ({pageIndex, initialValue}: Params, setUsers: SetUsers)=>{
  const sliceForm = (pageIndex-1)*USER_PER_PAGE-1;
  const sliceEnd = pageIndex*USER_PER_PAGE;
  useEffect(()=>{
    const newUsers = initialValue.slice(sliceForm, sliceEnd);
    
    setUsers(newUsers)
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