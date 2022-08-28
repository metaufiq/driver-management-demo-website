import { useEffect, useState } from "react";

import { User as UserFromAPI, Params as APIParams } from "../../api/randomUser/randomUser.api.types";
import api from "../../api";
import { SetUsers, User, Users } from "../../index.types";
import { formatISODateToDate } from "../../utils";
import { SetError, SetLoading } from "./useUsersQuery.hooks.types";

const _convertUserToUserState = (user: UserFromAPI):User => ({
  email: user.email,
  dob: formatISODateToDate(user.dob.date),
  firstName: user.name.first,
  lastName: user.name.last,
  username: user.login.username.toUpperCase(),
  phone: user.phone,
  profilePicture: user.picture.medium
})

const _getListUser = async (params: APIParams):Promise<Users> => {
  // const stringifyUsers = localStorage.getItem('users')
  // if (stringifyUsers) {
  //   return JSON.parse(stringifyUsers)
  // }

  const {results} = await api.randomUser.getListUser(params)

  const users = results.map(_convertUserToUserState)
  return users;
}

const _asyncInnit = async (
  setUsers: SetUsers, 
  setLoading: SetLoading, 
  setError: SetError
)=>{
  try {
    setLoading(true)
    const users = await _getListUser({results:30})

    setUsers(users)
    localStorage.setItem('users', JSON.stringify(users))
    setLoading(false)
  } catch (error) {
    setError(true)
  }

}


const useUsersQuery = () => {
  const [users, setUsers] = useState<Users>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(()=>{
    _asyncInnit(setUsers, setLoading, setError)
  }
  ,[])

  return {users, loading, error}
}

export default useUsersQuery;