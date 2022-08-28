import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";
import ListDriver from ".";
import { Props } from "./ListDriver.component.types";
import { themes } from "../../configs/themes";

describe('ListDriverSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal list driver',
      props:{
       data:[{
        dob: '12/10/1998',
        email: 'email@email.com',
        firstName: 'firstName',
        lastName: 'lastName',
        phone: '098123123123',
        username: 'userName',
        profilePicture: 'profile_picture_url'
       }], 
      },
      theme: themes,
      useTheme: true
    }
  ];

  assertSnapshots(ListDriver, configs);
});
