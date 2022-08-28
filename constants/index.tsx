import {TiHome} from 'react-icons/ti'
import {RiCalendar2Fill} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'

export const TOTAL_USER = 30;
export const USER_PER_PAGE = 5;
export const PAGE = TOTAL_USER/USER_PER_PAGE;
export const USER_AVATAR_URL = 'https://randomuser.me/api/portraits/med/men/18.jpg';
export const NAVIGATION_MENU = [
  {
      title: 'Beranda',
      path: '#',
      icon: <TiHome />,
  },
  {
      title: 'Driver Management',
      path: '/driver-management',
      icon: <FaUserCircle />,
      isRoot: true,
  },
  {
      title: 'Pickup',
      path: '#',
      icon: <RiCalendar2Fill />
  },
]