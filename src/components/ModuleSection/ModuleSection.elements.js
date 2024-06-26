// ModuleSection.elements.js
import styled from "styled-components";

export const ModuleSec = styled.section`
  color: #5a5353;

  padding: 40px 120px ;
  background: ${({ lightBg }) => (lightBg ? "#FDDBD0" : "#fbe3d6")};
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const ModuleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ModuleColumn = styled.div`

  padding: 15px;
  flex: 0 0 100%;
  max-width: 100%;

  &:last-child {
    flex: 1;
    max-width: none;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 0 0 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#A9B3C1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 1.5;
  color: #ea6f5c;
  margin-bottom: 0.8rem;

  text-align: justify;


  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  text-align: left;
  font-size: 2rem;
  line-height: 1.1;
  color: #e6ccbe;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
