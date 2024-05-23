import styled from "styled-components";

export const ModuleSec = styled.section`
  color: #fff;
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? "#3e4746" : "#c49964")};
`;

export const ModuleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModuleColumn = styled.div`
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
  max-width: 100%;

  @media screen and (max-width: 768px) {
    padding-bottom: 45px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#F7F8FA" : "#fff")};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Paragraph = styled.p`
  width: 100%;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#e5e3e1" : "#1C2237")};
  margin: 0;
  text-align: justify;
  word-break: break-word;
`;

export const SubSection = styled.div`
  margin-bottom: 32px;
  border: 2px solid #999999;
  border-radius: 8px;
  padding: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 18px;
  color: #1c2237;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Section = styled.div`
  margin-bottom: 32px;
`;
