import NavigationContainer from ".";
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

describe('NavigationContainerSnapshot', () => {
  const configs:Configs<any> = [
    {
      desc: 'should render navigation container',
      useTheme: true,
      theme: themes,
    }
  ];

  assertSnapshots(NavigationContainer, configs);
});
