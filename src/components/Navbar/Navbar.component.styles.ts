import styled from 'styled-components'

import { StyledComponentProps } from './Navbar.component.types'

export const Container = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: ${({visible})=>visible ? 'flex-end': 'space-between'};
    align-items: center;
    height: 3.5rem;
    padding: 0 2rem;
    background-color: white;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
`

export const InlineText = styled.p`
  display: inline-block;
`

export const UserName = styled(InlineText)`
  color: ${({theme})=>theme.colors.primary};
  margin-left: 0.3rem;
`

export const IconBurgerContainer = styled.a<StyledComponentProps>`
    display: ${({visible})=>visible ? 'none': 'flex'};
    justify-content: center;
    font-size: 1.5rem;
    color: ${({theme})=>theme.colors.primary};
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
