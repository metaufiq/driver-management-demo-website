import { useEffect, useState } from "react";

import {Params as APIParams } from "../../api/randomUser/randomUser.api.types";
import api from "../../api";
import { SetUsers, User, UserFromAPI, Users } from "@dmd/types";
import { formatISODateToDate } from "../../utils";
import { HooksData, SetError, SetLoading } from "./useUsersQuery.hooks.types";
import { TOTAL_USER } from "../../constants";

/**
 * convert user from API to converted user to be consumed by hooks consumer
 * @param {UserFromAPI} user user from API
 * @returns {User} converted user
 */
export const _convertUserToUserState = (user: UserFromAPI):User => ({
  email: user.email,
  dob: formatISODateToDate(user.dob.date),
  firstName: user.name.first,
  lastName: user.name.last,
  username: user.login.username.toUpperCase(),
  phone: user.phone,
  picture: user.picture
})

/**
 * async function to get users
 * @param {Params} params API params
 * @returns {Promise<Users>} promise to get users
 */
export const _getListUser = async (params: APIParams):Promise<Users> => {
  const stringifyUsers = localStorage.getItem('users')
  if (stringifyUsers) {
    return JSON.parse(stringifyUsers)
  }

  const {results} = await api.randomUser.getListUser(params)
  const users = results.map(_convertUserToUserState)

  return users;
}

/**
 * function that fetching data
 * @param {SetUsers} setUsers setter state for users data
 * @param {SetLoading} setLoading setter state for loading condition
 * @param {SetError} setError setter state for error condition
 * @returns {Promise<void>} Promise fetch operation
 */
export const _onFetch = async (
  setUsers: SetUsers, 
  setLoading: SetLoading, 
  setError: SetError
): Promise<void>=>{
  try {
    setLoading(true)
    setError(false)

    const users = await _getListUser({results:TOTAL_USER})

    setUsers(users)
    localStorage.setItem('users', JSON.stringify(users))
    setLoading(false)
  } catch (error) {
    setLoading(false)
    setError(true)
  }

}

/**
 * hooks to handle users API query
 * @returns {HooksData} hooks data and utils
 */
const useUsersQuery = (): HooksData => {
  const [users, setUsers] = useState<Users>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  // eslint-disable-next-line require-jsdoc
  const fetch = ()=>{
    _onFetch(setUsers, setLoading, setError)
  };

  useEffect(fetch,[])

  return {users, isLoading, isError, refetch: fetch}
}

export default useUsersQuery;