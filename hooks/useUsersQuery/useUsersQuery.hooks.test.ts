import React from "react";

import api from "../../api";
import { User as UserFromAPI } from "../../api/randomUser/randomUser.api.types";
import { User } from "../../index.types";
import { _asyncInnit, _convertUserToUserState, _getListUser } from "./useUsersQuery.hooks";
import useUsersQuery from '.'

const mockedUserAPI: UserFromAPI ={
  email: 'email@email.com',
  name:{
    first: 'firstName',
    last: 'lastName',
  },
  phone: '098123123123',
  login:{
    username: 'userName',
  },
  dob:{
    date: '22/22/1998'
  },
  picture:{
    large: 'profile_picture_url_large',
    medium: 'profile_picture_url_medium',
    thumbnail: 'profile_picture_url_thumbnail',
  },
};

const mockedAPIResult = new Array(5).fill(mockedUserAPI);

jest.mock('../../utils', ()=>({
  formatISODateToDate: (date:string)=>date
}))
jest.mock('../../api', ()=>({
  ...jest.requireActual('../../api'),
  randomUser:{
    getListUser:jest.fn()
  }
}))

describe('#_convertUserToUserState', () => {
  it('should return user with expected format', ()=>{
    const expected:User = {
      dob: mockedUserAPI.dob.date,
      email: mockedUserAPI.email,
      username: mockedUserAPI.login.username.toUpperCase(),
      firstName: mockedUserAPI.name.first,
      lastName: mockedUserAPI.name.last,
      phone: mockedUserAPI.phone,
      profilePicture: mockedUserAPI.picture.medium,
    }

    const result = _convertUserToUserState(mockedUserAPI)

    expect(result).toEqual(expected)
  })
});

describe('#_getListUser', () => {
  it('should return data from api when local storage empty', async ()=>{
    const user:User = {
      dob: mockedUserAPI.dob.date,
      email: mockedUserAPI.email,
      username: mockedUserAPI.login.username.toUpperCase(),
      firstName: mockedUserAPI.name.first,
      lastName: mockedUserAPI.name.last,
      phone: mockedUserAPI.phone,
      profilePicture: mockedUserAPI.picture.medium,
    }
    const expected = new Array(mockedAPIResult.length).fill(user)
    // @ts-ignore: mock implementation
    api.randomUser.getListUser.mockImplementationOnce(()=>({results:mockedAPIResult}))


    const result =  await _getListUser({results: 30})
    
    expect(result).toEqual(expected)
  })
});

describe('#_asyncInnit', () => {
  it('should set user when get API response', async ()=>{
    const setUsers = jest.fn()
    const setLoading = jest.fn()
    const setError = jest.fn()
    const user:User = {
      dob: mockedUserAPI.dob.date,
      email: mockedUserAPI.email,
      username: mockedUserAPI.login.username.toUpperCase(),
      firstName: mockedUserAPI.name.first,
      lastName: mockedUserAPI.name.last,
      phone: mockedUserAPI.phone,
      profilePicture: mockedUserAPI.picture.medium,
    }
    const expectedSetUsers = new Array(mockedAPIResult.length).fill(user)
    // @ts-ignore: mock implementation
    api.randomUser.getListUser.mockImplementationOnce(()=>({results:mockedAPIResult}))

    await _asyncInnit(setUsers, setLoading, setError)
    
    expect(setLoading).nthCalledWith(1, true)
    expect(setError).toBeCalledWith(false)
    expect(setUsers).toBeCalledWith(expectedSetUsers)
    expect(setLoading).nthCalledWith(2, false)
  })
});

describe('#useUserQuery', () => {
  it('should return all the necessary hooks method and variable', async ()=>{
    React.useState = jest.fn();
    const mockFetch = ()=>{}
    React.useEffect = jest.fn(mockFetch)
    const isError = false;
    const isLoading = false;
    const users = [{key: 'test if users work'}]
    React.useState
    // @ts-ignore: mock implementation
    .mockImplementationOnce(() => [users, ()=>{}])
    // @ts-ignore: mock implementation
    .mockImplementationOnce(() => [isLoading, ()=>{}])
    // @ts-ignore: mock implementation
    .mockImplementationOnce(() => [isError, ()=>{}])
    const expected = {
      isError,
      isLoading,
      users
    }

    const result = useUsersQuery()
  
    expect(result.isError).toEqual(expected.isError)
    expect(result.isLoading).toEqual(expected.isLoading)
    expect(result.users).toEqual(expected.users)
  })
});