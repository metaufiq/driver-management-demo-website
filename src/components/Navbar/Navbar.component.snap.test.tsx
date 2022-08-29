import { assertSnapshots } from "@dmd/test";
import Navbar from ".";
import { Configs } from "@dmd/test/index.types";
import { Props } from "./Navbar.component.types";
import { themes } from "../../configs/themes";

describe('NavbarSnapshot', () => {

  const configs: Configs<Props> = [
    {
      desc: 'should render normal Navbar with visible value is equal to true',
      props:{
        visible:true,
        userImage: 'user_image_url',
        onPressBurger: ()=>{}
      },
      theme: themes,
      useTheme: true
    },
    {
      desc: 'should render normal Navbar with visible value is equal to false',
      props:{
        visible:false,
        userImage: 'user_image_url',
        onPressBurger: ()=>{},
      },
      theme: themes,
      useTheme: true
    }
  ];

  assertSnapshots(Navbar, configs);
});
