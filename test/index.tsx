import {render} from '@testing-library/react';

import { Configs, Props } from "./index.types"

export const assertSnapshots = (Component:(props:Props) => JSX.Element, configs: Configs)=>{

  configs.forEach(config => {
    const {desc, props} = config
    test(desc, () => {
      jest.useFakeTimers()
      const container = render(<Component {...props}/>)
      
      const result = container.asFragment();
    
      expect(result).toMatchSnapshot()
    })
  })
}