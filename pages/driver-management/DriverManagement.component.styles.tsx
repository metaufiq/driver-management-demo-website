import styled from 'styled-components';

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
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
  overflow-x: scroll;
  background-color: #fafafa;
  padding: 2rem 0;
  @media (max-width: 1430px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
`
