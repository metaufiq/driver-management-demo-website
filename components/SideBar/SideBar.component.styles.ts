import styled from 'styled-components'

export const Navbar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3.5rem;
    background-color: white;
`

export const MenuIconOpen = styled.a`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: #ff453b;
`

export const MenuIconClose = styled.a`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ff453b;
`

export const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: ${({ close}) => close ? '0' : '-100%'};
    transition: .6s;
`

export const MenuItems = styled.li<{active:boolean}>`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 1rem 0 1.25rem;
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
