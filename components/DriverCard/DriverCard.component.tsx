import { Component } from "../../index.types";
import { Container, ContentContainer, Description, Title } from "./DriverCard.component.styles";

import { Props } from "./DriverCard.component.types";

const DriverCard:Component<Props> = ({user})=>{
  return(
  <Container>
    <ContentContainer>
      <Title>Nama Driver</Title>
      <Description>{user.firstName}, {user.lastName}</Description>
    </ContentContainer>
    <ContentContainer>
      <Title>Telepon</Title>
      <Description>{user.phone}</Description>
    </ContentContainer>
    <ContentContainer>
      <Title>Email</Title>
      <Description>{user.email}</Description>
    </ContentContainer>
    <ContentContainer>
      <Title>Tanggal Lahir</Title>
      <Description>{user.dob}</Description>
    </ContentContainer>
  </Container>)
}

export default DriverCard;