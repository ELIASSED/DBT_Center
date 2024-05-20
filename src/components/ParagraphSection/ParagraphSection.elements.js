import styled from "styled-components";


export const ParagraphSec = styled.div`
  color: #fff;
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? "#3e4746" : "#c49964")};
`;

export const ParagraphRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ParagraphColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width:75%;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 45px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#A9B3C1" : "#fff")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#F7F8FA" : "#1C2237")};
`;

export const Subtitle = styled.p`
  width: 100%;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#e5e3e1" : "#1C2237")};
  margin: 0;
  text-align: justify;
  text-align-last: justify; /* Pour justifier la dernière ligne */
  word-break: break-word; /* Pour gérer les longs mots */
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
