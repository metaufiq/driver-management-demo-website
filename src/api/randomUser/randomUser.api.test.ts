import { UserFromAPI } from "@dmd/types";
import { getListUser } from "./randomUser.api";
import { Params } from "./randomUser.api.types";

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

/**
 * mocked getListUser API result
 * @param {number} results total data
 * @returns {User[]} API result
 */
const mockedAPIResult = (results?: number): UserFromAPI[] => 
new Array(results).fill(mockedUserAPI);

jest.mock('../../configs/api', ()=>({
  RandomUser:{
    get: (path:string,{params:{results}}:{params:Params})=>({
      data:mockedAPIResult(results)
    })
  }
}))

describe('#getListUser', ()=>{
  it('should return api result', async ()=>{
    const results = 30
    const input:Params = {results}
    const expected = mockedAPIResult(results)
    const result = await getListUser(input)
  
    expect(result).toEqual(expected)
  })
})




