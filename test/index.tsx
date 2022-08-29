import {render} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Component as ComponentType, SetState } from '../index.types';

import { Config, Configs } from "./index.types"

export const mockFunctionSetState = (prevState: any) => {
  const setterListener = jest.fn();
  const setterObject:SetState<any> = (fn) => { setterListener(fn(prevState)); }
  return {setterListener, setterObject};
}

const _renderContainer = <Props,>(Component:ComponentType<Props>, {useTheme, props, theme}: Config<Props>)=>{
  if (!useTheme) {
    return render(<Component {...props!}/>)
  }

  return render(<ThemeProvider theme={theme!}>
    <Component {...props!}/>
    </ThemeProvider>)
}

export const assertSnapshots = <Props,>(Component:ComponentType<Props>, configs: Configs<Props>)=>{

  configs.forEach(config => {
    const {desc, beforeTest} = config

    if (beforeTest) {
      beforeTest();
    }

    test(desc, () => {
      jest.useFakeTimers()
      const container = _renderContainer(Component, config)
      
      const result = container.asFragment();
    
      expect(result).toMatchSnapshot()
    })
  })
}