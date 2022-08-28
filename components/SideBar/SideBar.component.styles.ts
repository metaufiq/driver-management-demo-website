import styled from 'styled-components'

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    margin: 0 2rem;
    background-color: white;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
`

export const InlineText = styled.p`
  display: inline-block;
`

export const UserName = styled(InlineText)`
  color: #ff453b;
  margin-left: 0.3rem;
`

export const MenuIconOpen = styled.a<{close: boolean}>`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    color: #ff453b;
    @media (min-width: 768px) {
      display: none;
    }
`

export const UserContainer = styled.div`
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
`

export const MenuIconClose = styled.a`
    display: flex;
    justify-content: end;
    font-size: 0.8rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ff453b;
    @media (min-width: 768px) {
      display: none;
    }
`

export const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height: 100vh;
    background-color: white;
    @media (max-width: 768px) {
      width: 100%;
      max-height: ${({close}) => close ? 0 : '200px'};
      transition: all 0.3s ease-out;
    }
`

export const MenuItems = styled.li<{active:boolean}>`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 1rem 0;
    border-left: ${({active }) => active ? '4px solid #ff453b' : '0'};
`

export const MenuItemLinks = styled.a`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
    color: gray;
    background-color: white;

    &:hover {
        color: #ff453b;
    }
`

export const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ChildContainer = styled.div`
  padding: 0;
  flex-grow: 1;
  background-color: #fafafa;
  padding: 2rem;
`
