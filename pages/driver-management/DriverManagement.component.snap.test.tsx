import { assertSnapshots } from "../../src/test";
import { Configs } from "../../src/test/index.types";
import { themes } from "../../src/configs/themes";
import DriverManagement from "./index.page";

jest.mock('../../src/hooks/useUsers', ()=>()=>({
  users: [{key: 'example one of users key'}]
}))
jest.mock('../../src/hooks/useUsersQuery', ()=>()=>({
  users: [{key: 'example one of users api key'}]
}))

describe('DriverCardSnapshot', () => {

  const configs: Configs<any> = [
    {
      desc: 'should render normal driver management page',
      theme: themes,
      useTheme: true
    }
  ];

  assertSnapshots(DriverManagement, configs);
});
