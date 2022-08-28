import React from "react";
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
    },
    {
      desc: 'should render navigation container with close icon',
      useTheme: true,
      theme: themes,
      beforeTest:()=>{
        React.useState = jest.fn();
        // @ts-ignore: mock implementation
        React.useState.mockImplementation(() => [true, ()=>{}]);
      }
    },
  ];

  assertSnapshots(NavigationContainer, configs);
});
