import { themes } from "../../configs/themes";
import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";
import TextInput from ".";
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
      desc: 'should render normal TextInput',
      useTheme: true,
      theme: themes
    },
    {
      props: { ...mockProps, leftIcon: <div/>},
      desc: 'should render normal TextInput with left icon',
      useTheme: true,
      theme: themes
    }
  ];

  assertSnapshots(TextInput, configs);
});
