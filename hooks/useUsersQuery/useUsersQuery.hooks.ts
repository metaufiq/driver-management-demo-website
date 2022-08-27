import { useEffect, useState } from "react";

import { User as UserFromAPI, Params as APIParams } from "../../api/randomUser/randomUser.api.types";
import api from "../../api";
import { SetUsers, User, Users } from "../../index.types";

const _convertUserToUserState = (user: UserFromAPI):User => ({
  email: user.email,
  dob: user.dob.date,
  firstName: user.name.first,
  lastName: user.name.last,
  username: user.login.username,
  phone: user.phone
})

const _getListUser = async (params: APIParams):Promise<Users> => {
  const {results} = await api.randomUser.getListUser(params)

  const users = results.map(_convertUserToUserState)
  return users;
}

const _asyncInnit = async (setUsers: SetUsers)=>{
  const users = await _getListUser({results:30})

  setUsers(users)
}


const useUsersQuery = () => {
  const [users, setUsers] = useState<Users>([]);

  useEffect(()=>{
    _asyncInnit(setUsers)
  }
  ,[])

  return {users}
}

export default useUsersQuery;