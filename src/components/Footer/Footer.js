import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading></FooterSubHeading>
        <FooterSubText>
          Adresse principale : 83 avenue Bosquet 75007 Paris
        </FooterSubText>
      </FooterSubscription>
      <FooterLinksWrapper>
        <FooterLinkItem>
          <FooterLinkTitle>Notre Equipe</FooterLinkTitle>
          <FooterLink to="/services">Le Centre</FooterLink>
          <FooterLink to="/about">Lorem Ipsum</FooterLink>
          <FooterLink to="/">Lorem Ipsum</FooterLink>
        </FooterLinkItem>

        <FooterLinkItem>
          <FooterLinkTitle>Documentation</FooterLinkTitle>
          <FooterLink to="/services">Le Centre</FooterLink>
          <FooterLink to="/about">Lorem Ipsum</FooterLink>
          <FooterLink to="/">Lorem Ipsum</FooterLink>
        </FooterLinkItem>
      </FooterLinksWrapper>
    </FooterContainer>
  );
};

export default Footer;
