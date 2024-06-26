import styled from "styled-components";

export const TeamSec = styled.div`
  color: #fff;
  padding: 60px 0;
  background: ${({ lightBg }) => (lightBg ? "#3e4746" : "#c49964")};
`;

export const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;
export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;
export const CardContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
  text-align: center;
  padding: 20px;
  margin: 15px auto;
  position: relative;
  cursor: pointer;
  height: 500px; /* Hauteur fixe pour les cartes rectangulaires */
  perspective: 1000px;

  &.is-flipped ${CardInner} {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centre horizontalement */

`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid #fff;
`;

export const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px 0;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 33.33%; /* Trois colonnes */
  flex-basis: 33.33%;
  padding: 15px;

  @media screen and (max-width: 768px) {
    max-width: 50%; /* Deux colonnes sur les petits écrans */
    flex-basis: 50%;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%; /* Une colonne sur les très petits écrans */
    flex-basis: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const MemberSpecialty = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 5px 0;
  text-align: center;
  word-break: break-word; /* Pour gérer les longs mots */
`;

export const MemberDescription = styled.p`
  font-size: 1rem;
  margin: 10px;

  text-align: justify;

  word-break: break-word; /* Pour gérer les longs mots */
`;

export const StyledParagraph = styled.p`
  text-align: center;
  text-align-last: justify;
  word-break: break-word;
`;

export const MemberMail = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => (theme.primary ? "blue" : "orange")};
  text-decoration: none;
  margin: 15px -15px;
  display: block;
`;

export const DoctolibLink = styled.a`
  font-size: 1rem;
  color: #1c88e5; /* Couleur spécifique pour le lien Doctolib */
  text-decoration: none;
  margin-top: 10px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;
