import { assertSnapshots } from "../../test";
import Avatar from ".";
import { Configs } from "../../test/index.types";
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
