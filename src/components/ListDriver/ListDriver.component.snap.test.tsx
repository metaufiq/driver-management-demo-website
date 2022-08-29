import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";
import ListDriver from ".";
import { Props } from "./ListDriver.component.types";
import { themes } from "../../configs/themes";
import { Users } from "../../../index.types";

describe('ListDriverSnapshot', () => {

  const data:Users = [{
    dob: '12/10/1998',
    email: 'email@email.com',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: '098123123123',
    username: 'userName',
    picture: {
      large: 'large_picture_url',
      medium: 'medium_picture_url',
      thumbnail: 'thumbnail_picture_url',
    }
   }]

  const configs: Configs<Props> = [
    {
      desc: 'should render normal state list driver',
      props:{
        data, 
      },
      theme: themes,
      useTheme: true
    },
    {
      desc: 'should render loading state list driver',
      props:{
        data: [],
        isLoading: true 
      },
      theme: themes,
      useTheme: true
    },
    {
      desc: 'should render error state list driver',
      props:{
        data: [],
        isError: true 
      },
      theme: themes,
      useTheme: true
    },
  ];

  assertSnapshots(ListDriver, configs);
});
