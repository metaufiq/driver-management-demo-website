import { User } from "../../index.types";
import { useInnit, useSearch } from "./useUsers.hooks";

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
  useState: jest.fn(()=>[[], jest.fn()])
}))

describe('#useInnit', () => {
  it('should get first 5 user', ()=>{
    const setUsers = jest.fn()
    const initialValue = new Array(10).fill(mockedUser);
    
    useInnit(initialValue, setUsers)

    expect(setUsers).toBeCalledWith(initialValue.slice(0,5))
  })
});

describe('#useSearch', () => {
  it('should set visibility to false', ()=>{
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
});

// describe('#useUsers', () => {
//   it('should set visibility to false', ()=>{
//     const setVisible = jest.fn()

//     const result = useUsers({
//       initialValue,
//       pageIndex: 1
//     })

//     expect(result).toEqual({users: []})
//   })
// });
