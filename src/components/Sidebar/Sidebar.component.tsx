import { ReactElement } from "react";

import { Component } from "../../../index.types";
import { 
  CloseButtonContainer, 
  Container, 
  MenuItemLinks, 
  MenuItems 
} from "./Sidebar.component.styles";
import { Props } from "./Sidebar.component.types";
import { useRouter } from "next/router";

/**
 * Sidebar components
 * @param {Props} props component props 
 * @returns {ReactElement} Sidebar components
 */
const Sidebar:Component<Props> = ({visible, onClose, navigationMenu}):ReactElement=>{
  const router = useRouter()
  const isRootRoute = router.route === '/';
return (
  <Container visible={visible}>
    <CloseButtonContainer
      href="#" 
      onClick={onClose}
    >
        Close
    </CloseButtonContainer>
    {navigationMenu.map((item, index) => {
        return (
            <MenuItems
              key={index} 
              active={
                router.route === item.path ||
                (isRootRoute && item.isRoot!)
              }>
                <MenuItemLinks href={item.path}>
                    {item.icon}
                    <span style={{marginLeft: '16px'}}>{item.title}</span>
                </MenuItemLinks>
            </MenuItems>
        )
    })}
  </Container>
)
}

export default Sidebar