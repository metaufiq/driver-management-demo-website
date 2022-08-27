import Button from ".";
import { assertSnapshots } from "../../test";
import { Configs } from "../../test/index.types";
import { Props } from "./Button.component.types";

describe('ButtonSnapshot', () => {
  const mockProps:Props = {
    children: 'children'
  };

  const configs:Configs<Props> = [
    {
      props: {...mockProps, onClick: ()=>{}},
      desc: 'should render normal Button'
    },
    {
      props: mockProps,
      desc: 'should render Button without onClick'
    },
    {
      props: {...mockProps, onClick: ()=>{}, type: 'PRIMARY'},
      desc: 'should render normal Button'
    },
    {
      props: {...mockProps, type: 'PRIMARY'},
      desc: 'should render Button without onClick'
    },
    {
      props: {...mockProps, onClick: ()=>{}, type: 'SECONDARY'},
      desc: 'should render normal Button'
    },
    {
      props: {...mockProps, type: 'SECONDARY'},
      desc: 'should render Button without onClick'
    },
  ];

  assertSnapshots(Button, configs);
});
