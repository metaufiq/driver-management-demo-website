import Sidebar from ".";
import { themes } from "../../configs/themes";
import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";

jest.mock('next/router', ()=>({
  ...jest.requireActual('next/router'),
  useRouter: ()=>({
    router:{
      route: '/'
    }
  })
}))

describe('SideBarSnapshot', () => {

  const configs:Configs<any> = [
    {
      desc: 'should render sidebar',
      useTheme: true,
      theme: themes
    },
  ];

  assertSnapshots(Sidebar, configs);
});
