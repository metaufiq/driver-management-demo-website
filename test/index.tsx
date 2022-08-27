import {render} from '@testing-library/react';
import { Component as ComponentType } from '../index.types';

import { Configs, Props } from "./index.types"

export const assertSnapshots = <Props,>(Component:ComponentType<Props>, configs: Configs<Props>)=>{

  configs.forEach(config => {
    const {desc, props} = config
    test(desc, () => {
      jest.useFakeTimers()
      const container = render(<Component {...props!}/>)
      
      const result = container.asFragment();
    
      expect(result).toMatchSnapshot()
    })
  })
}