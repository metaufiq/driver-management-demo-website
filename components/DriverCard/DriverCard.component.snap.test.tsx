import { assertSnapshots } from "../../test";
import DriverCard from ".";
import { Configs } from "../../test/index.types";
import { Props } from "./DriverCard.component.types";

describe('SeparatorLineSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal SeparatorLine',
      props:{
        user:{
          dob: '12/10/1998',
          email: 'email@email.com',
          firstName: 'firstName',
          lastName: 'lastName',
          phone: '098123123123',
          username: 'userName'
        }
      }
    }
  ];

  assertSnapshots(DriverCard, configs);
});
