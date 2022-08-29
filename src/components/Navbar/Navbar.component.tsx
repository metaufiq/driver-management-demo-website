import { ReactElement } from "react";
import {FaBars} from 'react-icons/fa'

import { Component } from "@dmd/types";
import { USER_AVATAR_URL } from "../../constants";
import Avatar from "../Avatar";
import { Container, IconBurgerContainer, InlineText, UserContainer, UserName } from "./Navbar.component.styles";
import { Props } from "./Navbar.component.types";

/**
 * Navbar components
 * @param {Props} props component props 
 * @returns {ReactElement} Navbar components
 */
const Navbar:Component<Props> = ({visible, onPressBurger}):ReactElement=>(
  <Container visible={visible}>
      <IconBurgerContainer
        visible={visible}
        href="#" 
        onClick={onPressBurger}
      >
        <FaBars />
      </IconBurgerContainer>
      <UserContainer>
        <InlineText>Hello,</InlineText>
        <UserName>Shipper User</UserName>
        <Avatar 
          src={USER_AVATAR_URL}
          height={'30%'}
          width={'30%'}
        />
      </UserContainer>
  </Container>
)

export default Navbar