import { assertSnapshots } from "@dmd/test";
import Avatar from ".";
import { Configs } from "@dmd/test/index.types";
import { Props } from "./Avatar.component.types";

describe('AvatarSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal SeparatorLine',
      props:{
        src: 'imageurl'
      }
    }
  ];

  assertSnapshots(Avatar, configs);
});
