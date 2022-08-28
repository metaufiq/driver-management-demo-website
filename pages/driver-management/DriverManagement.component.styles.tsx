import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.125rem;
  background-color: white;
  gap: 1rem;
  padding: 1rem;
`

export const HeaderTitle = styled.h1`
  color: ${({theme})=>theme.colors.primary};
  margin: 0.125rem 0;
`

export const HeaderDescription = styled.p`
  color: gray;
  margin: 0;
`

export const HeaderUtilsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  gap: 1rem;
  @media (max-width: 768px) {
      flex-direction: column;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
`
