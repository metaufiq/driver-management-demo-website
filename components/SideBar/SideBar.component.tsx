import { useState } from 'react'
import {TiHome} from 'react-icons/ti'
import {RiCalendar2Fill} from 'react-icons/ri'
import {FaUserCircle, FaBars, FaTimes} from 'react-icons/fa'

import { Component } from '../../index.types'
import { InlineText, MenuIconClose, MenuIconOpen, MenuItemLinks, MenuItems, Navbar, SidebarMenu, UserName } from './SideBar.component.styles'
import { useRouter } from 'next/router'

export const SidebarData = [
  {
      title: 'Beranda',
      path: '#',
      icon: <TiHome />
  },
  {
      title: 'Driver Management',
      path: '/driver-management',
      icon: <FaUserCircle />
  },
  {
      title: 'Pickup',
      path: '#',
      icon: <RiCalendar2Fill />
  },
]

const Sidebar: Component<any> = () => {
    const router = useRouter()
    const [close, setClose] = useState(false)
    
    const showSidebar = () => setClose(!close)
    return (
        <>
            <Navbar>
                <MenuIconOpen href="#" onClick={showSidebar}>
                    <FaBars />
                </MenuIconOpen>
                <div>
                  <InlineText>Hello,</InlineText>
                  <UserName>Shipper User</UserName>
                </div>
            </Navbar>

            <SidebarMenu close={close}>
                <MenuIconClose href="#" onClick={showSidebar}>
                    <FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index} active={router.route === item.path}>
                            <MenuItemLinks href={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default Sidebar