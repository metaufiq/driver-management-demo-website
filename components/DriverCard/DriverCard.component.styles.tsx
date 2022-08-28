import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 0.125rem;
  display:inline-block;
`

export const GrayText = styled.p`
  color: #c6c6c6;
`

export const PrimaryText = styled.p`
  color: #ff453b;
`

export const DriverIDTitle = styled(GrayText)`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.8rem;
`
export const DriverIDValue = styled(PrimaryText)`
  display: inline-block;
  font-size: 0.8rem;
`

export const DriverIDContainer = styled.div`
  padding: 1rem;
  border-bottom: 0.5px solid gray;
`

export const Title = styled(GrayText)`
  font-size: 0.5rem;
  margin: 0;
`

export const Description = styled.p`
  margin: 0;
  font-size: 0.8rem;
`

export const ContentContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
`

