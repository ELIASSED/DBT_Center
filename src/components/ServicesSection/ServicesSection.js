import React, { useState } from "react";
import { Container } from "../../globalStyle";
import {
  MemberName,
  MemberDescription,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  CardContainer,
} from "./ServicesSection.elements";
import {
  infosPratiques,
  tarifsEtRemboursement,
} from "../../pages/ServicesPage/Data";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const { tarifs } = tarifsEtRemboursement;
  return (
    <>
      <InfoSec lightBg={true}>
        <Container>
          <TextWrapper>
            <h1>{infosPratiques.titre}</h1>
          </TextWrapper>
          <InfoRow>
            {infosPratiques.schema.map((step, index) => (
              <InfoColumn key={index}>
                <CardContainer onClick={() => handleCardClick(index)}>
                  <TextWrapper>
                    <MemberName>{step.schema}</MemberName>
                    <MemberDescription
                      className={activeIndex === index ? "description" : ""}
                    >
                      {step.TeamMemberDescription}
                    </MemberDescription>
                  </TextWrapper>
                </CardContainer>
              </InfoColumn>
            ))}
          </InfoRow>
        </Container>
      </InfoSec>
      <InfoSec lightBg={true}>
        <Container>
          <TextWrapper>
            <MemberName>
              <strong>Tarifs et Remboursements</strong>
            </MemberName>
          </TextWrapper>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <MemberName>Tarifs</MemberName>
                <MemberDescription>
                  <u>
                    <strong>{tarifs.psychiatre.consultation}</strong>
                  </u>{" "}
                  <br />
                  {tarifs.psychiatre.convention}
                  <br />
                  {tarifs.psychiatre.tarif}
                  <br />
                  {tarifs.psychiatre.carteVitale}
                  <br />
                  {tarifs.psychiatre.moyensPaiement}
                </MemberDescription>
                <MemberDescription>
                  <u>
                    <strong>{tarifs.psychologue.consultation}</strong>
                  </u>
                  <br />
                  {tarifs.psychologue.tarif}
                  <br />
                  {tarifs.psychologue.moyensPaiement}
                </MemberDescription>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <MemberDescription>
                  <u>
                    <strong>{tarifs.remboursement.titre}</strong>
                  </u>
                </MemberDescription>
                <MemberDescription>
                  {tarifs.remboursement.psychologue}
                </MemberDescription>
                <MemberDescription>
                  {tarifs.remboursement.psychiatre}
                </MemberDescription>
                <MemberDescription>
                  {tarifs.remboursement.indemnisations}
                  <br />
                  <a
                    href="https://www.service-public.fr/particuliers/vosdroits/R18782"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Effectuez une demande d'indemnisation
                  </a>
                </MemberDescription>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default ServicesSection;
