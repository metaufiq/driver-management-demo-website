import { assertSnapshots } from "@dmd/test";
import Avatar from ".";
import { Configs } from "@dmd/test/index.types";
import { Props } from "./Spinner.component.types";

describe('SpinnerSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal Spinner',
      props:{
        size: '50px'
      }
    }
  ];

  assertSnapshots(Avatar, configs);
});
