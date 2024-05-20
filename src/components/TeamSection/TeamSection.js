import React, { useState } from "react";
import { Container } from "../../globalStyle";
import { equipe, partenaires } from "../../pages/TeamPage/Data";

import {
  TeamSec,
  Img,
  ImgWrapper,
  MemberName,
  MemberSpecialty,
  MemberDescription,
  MemberMail,
  TeamRow,
  InfoColumn,
  TextWrapper,
  CardContainer,
  DoctolibLink,
  CardInner,
  CardFront,
  CardBack,
  StyledParagraph,
} from "./TeamSection.elements";

const TeamSection = ({ start, lightBg }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <TeamSec lightBg={!lightBg}>
        <Container>
          <TextWrapper>
            <MemberName>
              <h1>{equipe.titre}</h1>
            </MemberName>
            <StyledParagraph>{equipe.description}</StyledParagraph>
          </TextWrapper>
          <TeamRow>
            {equipe.membres.map((member, index) => (
              <InfoColumn key={index}>
                <CardContainer onClick={() => handleCardClick(index)} className={activeIndex === index ? "is-flipped" : ""}>
                  <CardInner>
                    <CardFront>
                      <TextWrapper>
                        <MemberName>{member.nom}</MemberName>
                        <MemberSpecialty>{member.specialite}</MemberSpecialty>
                        <MemberDescription>
                          {member.TeamMemberDescription}
                        </MemberDescription>
                        {member.TeamMemberMail && (
                          <MemberMail href={`mailto:${member.TeamMemberMail}`}>
                            {member.TeamMemberMail}
                          </MemberMail>
                        )}
                        {member.doctolibLink && (
                          <DoctolibLink
                            href={member.doctolibLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Prendre rendez-vous sur Doctolib
                          </DoctolibLink>
                        )}
                      </TextWrapper>
                    </CardFront>
                    <CardBack>
                      <ImgWrapper start={start}>
                        <Img src={member.image} alt={member.nom} />
                      </ImgWrapper>
                    </CardBack>
                  </CardInner>
                </CardContainer>
              </InfoColumn>
            ))}
          </TeamRow>
        </Container>
      </TeamSec>
      <TeamSec lightBg={lightBg}>
        <Container>
          <TextWrapper>
            <MemberName>
              <h1>{partenaires.titre}</h1>
            </MemberName>
            <p>{partenaires.description}</p>
          </TextWrapper>
          <TeamRow>
            {partenaires.liste.map((partenaire, index) => (
              <InfoColumn key={index}>
                <CardContainer>
                 
                      <TextWrapper>
                        <MemberName>{partenaire.nom}</MemberName>
                        {partenaire.specialite && (
                          <MemberSpecialty>{partenaire.specialite}</MemberSpecialty>
                        )}
                        <MemberDescription>
                          {partenaire.description}
                        </MemberDescription>
                        {partenaire.contact && <p>Contact: {partenaire.contact}</p>}
                        {partenaire.adresse && <p>Adresse: {partenaire.adresse}</p>}
                        {partenaire.doctolibLink && (
                          <DoctolibLink
                            href={partenaire.doctolibLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Prendre rendez-vous sur Doctolib
                          </DoctolibLink>
                        )}
                      </TextWrapper>
                 
                </CardContainer>
              </InfoColumn>
            ))}
          </TeamRow>
        </Container>
      </TeamSec>
    </>
  );
};

export default TeamSection;
