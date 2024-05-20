import styled from "styled-components";

export const InfoTitle = styled.div`
  color: ${({ lightTitle }) => (lightTitle ? "#A9B3C1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const InfoDescription = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightDesc }) => (lightDesc ? "#F7F8FA" : "#1C2237")};
`;

export const InfoSubDescription = styled.p`
  width: 100%;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightText }) => (lightText ? "#e5e3e1" : "#1C2237")};
  margin: 0;
  text-align: justify;
  word-break: break-word;
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#3e4746" : "#c49964")};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9);
  text-align: center;
  padding: 40px;
  margin: 15px;
  position: relative;
  cursor: pointer;
  height: 200px;

  &:hover .description {
    max-height: 200px;
  }
`;

export const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 33.33%;
  flex-basis: 33.33%;
  padding: 15px;

  @media screen and (max-width: 768px) {
    max-width: 50%;
    flex-basis: 50%;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
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
  margin-bottom: 5px;
`;
export const MemberDescription = styled.p`
  font-size: 1rem;
  margin: 10px;

  max-height: none; /* Suppression de la restriction de hauteur */
  overflow: visible; /* Permettre de voir tout le texte */
  transition: none; /* Suppression de la transition */
  &.description {
    max-height: none; /* Assurez-vous que la classe description n'ajoute aucune restriction */
    transition: none; /* Suppression de la transition pour la classe description */
  }
`;


export const MemberMail = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => (theme.primary ? "blue" : "orange")};
  text-decoration: none;
  margin: 15px 0;
  display: block;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
`;
