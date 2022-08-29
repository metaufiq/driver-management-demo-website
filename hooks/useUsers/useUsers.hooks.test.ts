import React from "react";
import { User } from "../../index.types";
import { useInnit, usePage, useSearch, _filterByKeys } from "./useUsers.hooks";
import useUsers from ".";

const mockedUser: User ={
  dob: '12/10/1998',
  email: 'email@email.com',
  firstName: 'firstName',
  lastName: 'lastName',
  phone: '098123123123',
  username: 'userName',
  profilePicture: 'profile_picture_url'
};

jest.mock('react', ()=>({
  ...jest.requireActual('react'),
  useEffect: jest.fn(fn=>fn()),
}))

describe('#useInnit', () => {
  it('should get first 5 first user', ()=>{
    const setUsers = jest.fn()
    const initialValue = new Array(10).fill(mockedUser);
    
    useInnit(initialValue, setUsers)

    expect(setUsers).toBeCalledWith(initialValue.slice(0,5))
  })
});

describe('#_filterByKeys', () => {
  it('should return true when value equal to search input and same word case', ()=>{
    const user = {...mockedUser, firstName: 'benedict'}
    const searchInput = 'be';

    const result = _filterByKeys(searchInput, ['firstName'])(user)


    expect(result).toBeTruthy()
  })
  
  it('should return true when value equal to search input and different word case', ()=>{
    const user = {...mockedUser, firstName: 'Benedict'}
    const searchInput = 'be';

    const result = _filterByKeys(searchInput, ['firstName'])(user)


    expect(result).toBeTruthy()
  })

  it('should return true when value not equal to search input', ()=>{
    const user = {...mockedUser, firstName: 'cenedict'}
    const searchInput = 'be';

    const result = _filterByKeys(searchInput, ['firstName'])(user)


    expect(result).toBeFalsy()
  })
});

describe('#useSearch', () => {
  it('should get first 5 user when firstname contain search input', ()=>{
    const setUsers = jest.fn()
    const mockedUsers = new Array(10).fill(mockedUser);
    const expectedUser1 = {...mockedUser, firstName: 'benedict'}
    const expectedUser2 = {...mockedUser, firstName: 'belia'}
    const expected1 = new Array(4).fill(expectedUser1).concat([expectedUser2]);
    const expected = expected1.slice(0,5);
    const initialValue = mockedUsers.concat(expected)
    const searchInput = 'be';

    useSearch(
      {
      initialValue, 
      searchInput, 
      pageIndex:1
      }, setUsers
    )


    expect(setUsers).toBeCalledWith(expected)
  })

  it('should get first 5 user from initial value when search input empty', ()=>{
    const setUsers = jest.fn()
    const initialValue = new Array(10).fill(mockedUser);
    const expected = initialValue.slice(0,5);
    const searchInput = '';

    useSearch(
      {
      initialValue, 
      searchInput, 
      pageIndex:1
      }, setUsers
    )


    expect(setUsers).toBeCalledWith(expected)
  })

  it('should didn`t get any user because none contain search input', ()=>{
    const setUsers = jest.fn()
    const initialValue = new Array(10).fill(mockedUser);
    const searchInput = 'be';

    useSearch(
      {
      initialValue, 
      searchInput, 
      pageIndex:1
      }, setUsers
    )


    expect(setUsers).toBeCalledWith([])
  })
});

describe('#usePage', () => {

  it('should get first 5 user from initial value on first page', ()=>{
    const setUsers = jest.fn()
    const initialValue = new Array(10).fill(mockedUser);
    const expected = initialValue.slice(0,5);
    const searchInput = '';
    const pageIndex = 1;

    usePage(
      {
      initialValue, 
      searchInput, 
      pageIndex
      }, setUsers
    )


    expect(setUsers).toBeCalledWith(expected)
  })

  it('should get 5 user from index 6 to 10 inside initial value on second page', ()=>{
    const setUsers = jest.fn()
    const initialValue = new Array(10).fill(mockedUser);
    const expected = initialValue.slice(4,9);
    const searchInput = '';
    const pageIndex = 2;

    usePage(
      {
      initialValue, 
      searchInput, 
      pageIndex
      }, setUsers
    )


    expect(setUsers).toBeCalledWith(expected)
  })
});

describe('#useUsers', () => {
  it('should equal to first state', ()=>{
    const expected = new Array(10).fill(mockedUser);
    React.useState = jest.fn();
    // @ts-ignore: mock implementation
    React.useState.mockImplementation(() => [expected, ()=>{}]);

    const result = useUsers({
      initialValue: [],
      pageIndex: 1
    })

    expect(result).toEqual({users: expected})
  })
});
