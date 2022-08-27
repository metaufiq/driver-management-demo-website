import Sidebar from ".";
import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";

describe('ButtonSnapshot', () => {

  const configs = [
    {
      desc: 'should render sidebar'
    },
  ];

  assertSnapshots(Sidebar, configs);
});
