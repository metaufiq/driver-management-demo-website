import { User as UserFromAPI } from "../../api/randomUser/randomUser.api.types";
import { User } from "../../index.types";
import { _convertUserToUserState } from "./useUsersQuery.hooks";

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

jest.mock('../../utils', ()=>({
  formatISODateToDate: (date:string)=>date
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