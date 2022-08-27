import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 0.75rem;
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
  background-color: transparent;
`