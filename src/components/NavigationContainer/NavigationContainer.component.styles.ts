import styled from 'styled-components'

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
