import styled from "styled-components";

export const RevTherapySec = styled.div`
  color: #5a5353;
  padding: 40px 120px;
  background: ${({ lightBg }) => (lightBg ? "#FDDBD0" : "#FFE0B7")};

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const RevTherapyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RevTherapyColumn = styled.div`
  padding: 15px;
  flex: 0 0 100%;
  max-width: 100%;

  &:first-child {
    flex: 0 0 66%;
    max-width: 66%;
  }
  &:last-child {
    flex: 0 0 33%;
    max-width: 33%;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

export const RevTherapyTextWrapper = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export const RevTherapyHeading = styled.h1`
  font-size: 2rem;
  color: #1f3a47;
  margin-bottom: 1rem;
  text-align: center;
`;

export const RevTherapySubtitle = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #ea6f5c;
  margin-bottom: 0.8rem;
  text-align: justify;
  word-break: break-word;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const RevTherapyListItem = styled.li`
  font-size: 1rem;
  color: #cc6958;
  margin-bottom: 0.5rem;
`;

export const RevTherapyImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const RevTherapyImg = styled.img`
   max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 700px; /* Augmenter cette valeur pour agrandir l'image */
  border: 2px solid #c49964;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    max-height: 500px; /* Ajuster cette valeur pour mobile */
  }
`;

export const RevTherapyVideoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 555px;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RevTherapyVideoFrame = styled.iframe`
  width: 100%;
  height: 315px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: none;

  @media screen and (max-width: 958px) {
    height: 200px;
  }
`;

export const RevTherapyVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const RevTherapyModuleSec = styled.section`
  padding: 0px;
  background: #f4e5d4;
`;

export const RevTherapyModuleRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RevTherapyModuleColumn = styled.div`
  &:first-child {
    flex: 0 0 66%;
    max-width: 66%;
  }
  &:last-child {
    flex: 0 0 33%;
    max-width: 33%;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

export const RevTherapyTopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#A9B3C1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
