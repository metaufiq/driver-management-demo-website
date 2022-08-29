import { assertSnapshots } from "../../test";
import Button from ".";
import { Configs } from "../../test/index.types";
import { Props } from "./Button.component.types";
import { themes } from "../../configs/themes";

describe('StyledButtonSnapshot', () => {

  const configs:Configs<Props> = [
    {
      desc: 'should render normal button',
      useTheme: true,
      theme: themes
    },
    {
      desc: 'should render custom text align button',
      props: {textAlign:"start"},
      useTheme: true,
      theme: themes
    },
    {
      desc: 'should render normal primary button',
      props: {buttonType:'PRIMARY'},
      useTheme: true,
      theme: themes
    },
    {
      desc: 'should render normal navigation button',
      props: {buttonType:'NAVIGATION'},
      useTheme: true,
      theme: themes
    },
  ];

  assertSnapshots(Button, configs);
});
