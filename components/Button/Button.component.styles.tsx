import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;
  border: 0;
`

export const PrimaryButton = styled(StyledButton)`
  background-color: #ff453b;
  color: white;
  border-radius: 0.125rem;
`

export const NavigationButton = styled(StyledButton)`
  font-size: 1rem;
  background-color: transparent;
`