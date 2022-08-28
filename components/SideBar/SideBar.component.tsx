import { useState } from 'react'
import {FaBars} from 'react-icons/fa'

import { Component } from '../../index.types'
import { 
  ChildContainer,
  ContentContainer, 
  InlineText, 
  MenuIconClose, 
  MenuIconOpen, 
  MenuItemLinks, 
  MenuItems, 
  Navbar, 
  SidebarMenu, 
  UserContainer, 
  UserName 
} from './SideBar.component.styles'
import { useRouter } from 'next/router'
import { Props } from './SideBar.component.types'
import Avatar from '../Avatar'
import { SIDEBAR_MENU, USER_AVATAR_URL } from '../../constants'

const Sidebar: Component<Props> = (props) => {
    const router = useRouter()
    const isRootRoute = router.route === '/';
    
    const [close, setClose] = useState(false)
    
    const showSidebar = () => setClose(!close)
    return (
        <>
            <Navbar>
                <MenuIconOpen 
                  close={close} 
                  href="#" 
                  onClick={showSidebar}
                >
                    {close &&  <FaBars /> }
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
              <SidebarMenu close={close}>
                <MenuIconClose href="#" onClick={showSidebar}>
                    Close
                </MenuIconClose>
                  {SIDEBAR_MENU.map((item, index) => {
                      return (
                          <MenuItems 
                            key={index} 
                            active={
                              router.route === item.path ||
                              (isRootRoute && !!item.isRoot)
                            }>
                              <MenuItemLinks href={item.path}>
                                  {item.icon}
                                  <span style={{marginLeft: '16px'}}>{item.title}</span>
                              </MenuItemLinks>
                          </MenuItems>
                      )
                  })}
              </SidebarMenu>
              <ChildContainer>
                {props.children}
              </ChildContainer>
            </ContentContainer>
        </>
    )
}

export default Sidebar