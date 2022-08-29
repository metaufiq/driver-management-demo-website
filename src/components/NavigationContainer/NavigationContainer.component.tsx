import { ReactElement, useState } from 'react'
import { useRouter } from 'next/router'

import { Component } from '../../../index.types'
import { 
  ChildContainer,
  ContentContainer,
  MenuIconClose, 
  MenuItemLinks, 
  MenuItems, 
  MenuList,
} from './NavigationContainer.component.styles'
import { Props, SetVisible } from './NavigationContainer.component.types'
import { NAVIGATION_MENU, USER_AVATAR_URL } from '../../constants'
import Navbar from '../Navbar'

/**
 * function to set sidebar visibility
 * @param {SetVisible} setVisible set sidebar visible or not
 * @param visible visible condition for sidebar
 * @returns {VoidFunction} execute setVisible
 */
export const _showSidebar = (setVisible:SetVisible, visible: boolean): VoidFunction=>
() => setVisible(visible)

/**
 * Navigation Container components
 * @param {Props} props component props 
 * @returns {ReactElement} Text Input components
 */
const NavigationContainer: Component<Props> = (props: Props):ReactElement => {
    const router = useRouter()
    const isRootRoute = router.route === '/';
    
    const [visible, setVisible] = useState(false)
    
    return (
        <>
            <Navbar
              visible={visible}
              userImage={USER_AVATAR_URL}
              onPressBurger={_showSidebar(setVisible, true)}
            />

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