import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";
import { themes } from "../../configs/themes";
import DriverManagement from "./index.page";

jest.mock('../../components/Button', ()=>'Button')
jest.mock('../../components/PaginationBar', ()=>'PaginationBar')
jest.mock('../../components/ListDriver', ()=>'ListDriver')
jest.mock('../../components/TextInput', ()=>'TextInput')
jest.mock('../../hooks/useUsers', ()=>()=>({
  users: [{key: 'example one of users key'}]
}))
jest.mock('../../hooks/useUsersQuery', ()=>()=>({
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
