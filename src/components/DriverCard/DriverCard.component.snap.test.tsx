import { assertSnapshots } from "../../test";
import DriverCard from ".";
import { Configs } from "../../test/index.types";
import { Props } from "./DriverCard.component.types";
import { themes } from "../../configs/themes";

describe('DriverCardSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal driver card',
      props:{
        user:{
          dob: '12/10/1998',
          email: 'email@email.com',
          firstName: 'firstName',
          lastName: 'lastName',
          phone: '098123123123',
          username: 'userName',
          profilePicture: 'profile_picture_url'
        }
      },
      theme: themes,
      useTheme: true
    }
  ];

  assertSnapshots(DriverCard, configs);
});
