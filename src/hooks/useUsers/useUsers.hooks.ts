import { useEffect, useState } from "react";
import { USER_PER_PAGE } from "../../constants";

import { SetUsers, Users } from "../../../index.types";
import { User } from "../../../index.types";
import { FilterKey, FilterUserFunction, HooksData, Params } from "./useUsers.hooks.types";


const FILTER_KEYS:FilterKey[] = ["firstName"];

/**
 * effect that running when initial value changes
 * @param {Params['initialValue']} initialValue hooks initial value
 * @param {SetUsers} setUsers setter state for users data
 * @returns {void} execute effect
 */
export const useInnit = (
  initialValue: Params['initialValue'],
  setUsers: SetUsers
): void=>{
  useEffect(()=>{
    setUsers(initialValue.slice(0,5))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);
}

/**
 * filter user by their object keys
 * @param searchInput search input
 * @param {FilterKey[]} filterKeys keys from user object to filter data 
 * @returns {FilterUserFunction} filter result
 */
export const _filterByKeys = (
  searchInput: string,
  filterKeys: FilterKey[]
):FilterUserFunction=>(user:User) => {
  return filterKeys.some(key=> {
    let data = user[key]

    const lowerCaseData = data.toLowerCase();
    const lowerCaseSearchInput = searchInput.toLowerCase();

    return lowerCaseData.includes(lowerCaseSearchInput)
  })
}

/**
 * effect that running when search input from hooks params changes
 * @param {Params} params hooks params
 * @param {SetUsers} setUsers setter state for users data
 * @returns {void} execute effect
 */
export const useSearch = ({searchInput, initialValue}: Params, setUsers: SetUsers)=>{
  useEffect(()=>{
    const data = !searchInput ? initialValue : initialValue.filter(_filterByKeys(searchInput, FILTER_KEYS));
    setUsers(data.slice(0,5))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])
}

/**
 * effect that running when page index from hooks params changes
 * @param {Params} params hooks params
 * @param {SetUsers} setUsers setter state for users data
 * @returns {void} execute effect
 */
export const usePage = (
  {pageIndex, initialValue}: Params,
  setUsers: SetUsers
): void=>{

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

/**
 * hooks to handle users API query
 * @param {Params} params hooks params
 * @returns {HooksData} hooks data
 */
const useUsers = (params: Params): HooksData=>{
  const [users, setUsers] = useState<Users>([]);

  useInnit(params.initialValue, setUsers)
  useSearch(params, setUsers)
  usePage(params, setUsers)

  return {users}
}

export default useUsers;