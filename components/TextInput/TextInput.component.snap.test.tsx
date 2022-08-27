import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";
import TextInput from "./";
import { Props } from "./TextInput.component.types";

describe('TextInputSnapshot', () => {
  const mockProps:Props = {
    onChange:()=>{},
    placeholder: 'placeholder',
    type: 'password'
  };

  const configs:Configs<Props> = [
    {
      props: mockProps,
      desc: 'should render normal TextInput without id'
    },
    {
      props: { ...mockProps, id: 'id'},
      desc: 'should render normal TextInput'
    }
  ];

  assertSnapshots(TextInput, configs);
});
