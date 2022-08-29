import styled from 'styled-components'

import { MenuItemsProps, StyledComponentProps } from './Sidebar.component.types'

export const Container = styled.div<StyledComponentProps>`
  width: 250px;
  height: 100vh;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
    max-height: ${({visible}) => visible ? '200px' : 0};
    transition: all 0.3s ease-out;
  }
`

export const CloseButtonContainer = styled.a`
    display: flex;
    justify-content: end;
    font-size: 0.8rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: ${({theme})=>theme.colors.primary};
    @media (min-width: 768px) {
      display: none;
    }
`

export const MenuItems = styled.li<MenuItemsProps>`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 1rem 0;
    border-left: ${({active,theme }) => active ? `4px solid ${theme.colors.primary}` : '0'};
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
        color: ${({theme})=>theme.colors.primary};
    }
`
