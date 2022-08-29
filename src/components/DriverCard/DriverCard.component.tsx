import { ReactElement } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

import { Component } from "../../../index.types";
import { 
  Container, 
  DescriptionContentContainer,
  Description,
  DriverIDTitle,
  DriverIDValue, 
  Header,
  ThreeDotsContainer, 
  Title, 
  ContentContainer,
  Avatar,
  HideMobileContainer,
  DescriptionContainer
} from "./DriverCard.component.styles";

import { Props } from "./DriverCard.component.types";

/**
 * Driver Card components
 * @param {Props} props component props 
 * @returns {ReactElement} Driver Card components
 */
const DriverCard:Component<Props> = ({user}):ReactElement=>{
  return(
  <Container>
    <Header>
      <div>
        <DriverIDTitle>Driver ID</DriverIDTitle>
        <DriverIDValue>{user.username}</DriverIDValue>
      </div>
      <ThreeDotsContainer>
        <HiDotsHorizontal/>
      </ThreeDotsContainer>
    </Header>
    <ContentContainer>
      <Avatar
        src={user.profilePicture}
      />
      <DescriptionContainer>
        <DescriptionContentContainer>
          <Title>Nama Driver</Title>
          <Description>{user.firstName}, {user.lastName}</Description>
        </DescriptionContentContainer>
        <DescriptionContentContainer>
          <Title>Telepon</Title>
          <Description>{user.phone}</Description>
        </DescriptionContentContainer>
        <HideMobileContainer>
          <DescriptionContentContainer>
            <Title>Email</Title>
            <Description>{user.email}</Description>
          </DescriptionContentContainer>
          <DescriptionContentContainer>
            <Title>Tanggal Lahir</Title>
            <Description>{user.dob}</Description>
          </DescriptionContentContainer>
        </HideMobileContainer>
      </DescriptionContainer>
    </ContentContainer>
  </Container>)
}

export default DriverCard;