import { ReactElement, useState } from 'react'

import { Component } from '@dmd/types'
import { NAVIGATION_MENU, USER_AVATAR_URL } from '../../constants'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { 
  ChildContainer,
  ContentContainer
} from './NavigationContainer.component.styles'
import { Props, SetVisible } from './NavigationContainer.component.types'


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
    const [visible, setVisible] = useState(false)
    
    return (
        <>
            <Navbar
              visible={visible}
              userImage={USER_AVATAR_URL}
              onPressBurger={_showSidebar(setVisible, true)}
            />

            <ContentContainer>
              <Sidebar
                visible={visible}
                navigationMenu={NAVIGATION_MENU}
                onClose={_showSidebar(setVisible, false)}
              />
              <ChildContainer>
                {props.children}
              </ChildContainer>
            </ContentContainer>
        </>
    )
}

export default NavigationContainer