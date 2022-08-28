import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { useRouter } from 'next/router'

import { Component } from '../../index.types'
import { 
  ChildContainer,
  ContentContainer, 
  InlineText, 
  MenuIconClose, 
  MenuIconOpen, 
  MenuItemLinks, 
  MenuItems, 
  MenuList, 
  Navbar,
  UserContainer, 
  UserName 
} from './NavigationContainer.component.styles'
import { Props, SetVisible } from './NavigationContainer.component.types'
import Avatar from '../Avatar'
import { NAVIGATION_MENU, USER_AVATAR_URL } from '../../constants'

export const _showSidebar = (setVisible:SetVisible, visible: boolean)=>
() => setVisible(visible)

const NavigationContainer: Component<Props> = (props) => {
    const router = useRouter()
    const isRootRoute = router.route === '/';
    
    const [visible, setVisible] = useState(false)
    
    return (
        <>
            <Navbar>
                <MenuIconOpen 
                  visible={visible} 
                  href="#" 
                  onClick={_showSidebar(setVisible, true)}
                >
                    {visible &&  <FaBars /> }
                </MenuIconOpen>
                <UserContainer>
                  <InlineText>Hello,</InlineText>
                  <UserName>Shipper User</UserName>
                  <Avatar 
                    src={USER_AVATAR_URL}
                    height={'30%'}
                    width={'30%'}
                  />
                </UserContainer>
            </Navbar>

            <ContentContainer>
              <MenuList visible={visible}>
                <MenuIconClose href="#" onClick={_showSidebar(setVisible, false)}>
                    Close
                </MenuIconClose>
                  {NAVIGATION_MENU.map((item, index) => {
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
              </MenuList>
              <ChildContainer>
                {props.children}
              </ChildContainer>
            </ContentContainer>
        </>
    )
}

export default NavigationContainer