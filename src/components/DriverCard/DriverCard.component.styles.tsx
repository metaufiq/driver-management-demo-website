import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 0.125rem;
  display:inline-block;
`

const GrayText = styled.p`
  color: #c6c6c6;
`

export const Header = styled.div`
  padding: 1rem;
  border-bottom: 0.5px solid gray;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const DriverIDTitle = styled(GrayText)`
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.8rem;
`
export const DriverIDValue = styled.p`
  display: inline-block;
  margin-top: 0;
  color: ${({theme})=>theme.colors.primary};
  margin-bottom: 0;
  font-size: 0.8rem;
`

export const ThreeDotsContainer = styled.div`
  color: #c6c6c6;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Title = styled(GrayText)`
  font-size: 0.5rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`

export const Description = styled.p`
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const ContentContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const DescriptionContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
`

export const DescriptionContentContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
`

export const HideMobileContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-grow: 0.5;
    padding: 2rem;
  }
`

