import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
  padding: 2rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.125rem;
  background-color: white;
  padding: 1rem;
`

export const HeaderTitle = styled.h1`
  color: #ff453b;
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
  @media (max-width: 768px) {
      flex-direction: column;
  }
`

export const ListUserContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  background-color: #fafafa;
  padding: 2rem 0;
`

export const PaginationContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
`
