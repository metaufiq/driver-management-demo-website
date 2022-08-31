import { assertSnapshots } from "@dmd/test";
import { Configs } from "@dmd/test/index.types";
import { themes } from "../../src/configs/themes";
import DriverManagement from "./index.page";

jest.mock('../../src/components/ListDriver', ()=>'ListDriver')
jest.mock('../../src/components/TextInput', ()=>'TextInput')
jest.mock('../../src/components/PaginationBar', ()=>'PaginationBar')
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
