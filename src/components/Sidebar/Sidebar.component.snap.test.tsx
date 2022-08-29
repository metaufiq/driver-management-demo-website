import { assertSnapshots } from "@dmd/test";
import Sidebar from ".";
import { Configs } from "@dmd/test/index.types";
import { Props } from "./Sidebar.component.types";
import { themes } from "../../configs/themes";
import { NAVIGATION_MENU } from "../../constants";

jest.mock('next/router', ()=>({
  ...jest.requireActual('next/router'),
  useRouter: ()=>({
    router:{
      route: '/'
    }
  })
}))

describe('NavbarSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal Navbar with visible value is equal to true',
      props:{
        visible:true,
        navigationMenu: NAVIGATION_MENU,
        onClose: ()=>{}
      },
      theme: themes,
      useTheme: true
    },
    {
      desc: 'should render normal Navbar with visible value is equal to false',
      props:{
        visible:false,
        navigationMenu: NAVIGATION_MENU,
        onClose: ()=>{}
      },
      theme: themes,
      useTheme: true
    }
  ];

  assertSnapshots(Sidebar, configs);
});
