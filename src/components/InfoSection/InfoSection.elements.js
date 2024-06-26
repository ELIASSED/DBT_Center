import styled from "styled-components";

export const InfoSec = styled.div`
  color: #5a5353;
padding: 20px 10px 0;
  background: ${({ lightBg }) => (lightBg ? "#FDDBD0" : "#FFE0B7")};

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const InfoColumn = styled.div`
  margin: 15px;
  padding: 15px;
  flex: 0 0 50%;
  max-width: 50%;

  &:last-child {
    flex: 1;
    max-width: none;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
padding-top: 4rem;
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

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.1;
  color: #EA6F5C;
  margin-bottom: 0.8rem;
  text-align: justify;
  word-break: break-word; 

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
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

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: center;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: flex;
  max-height: 500px;
  margin: 1rem;

  @media screen and (max-width: 958px) {
    max-width: 100%;
    max-height: 500px;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;



  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    max-height: 500px;
  }
`;

export const VideoFrame = styled.iframe`
  width: 630px;
  height: 415px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: none;

  @media screen and (max-width: 958px) {
    width: 100%;
    height: auto;
  }
`;

export const VideoContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

`;

export const ModuleSec = styled.section`
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? "#3e4746" : "#c49964")};
`;

export const ModuleRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModuleColumn = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;