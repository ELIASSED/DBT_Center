import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Monospace:wght@400;700&display=swap');
  
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Monospace', 'Cardo';
  }
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 1700px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#8DAA9D" : "#FF715B")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0B4F6C" : "#4b59F7")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export const PageContainer = styled.div`
  background: #FDDBD0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CenteredTitle = styled.h1`
  color: #EA6F5C;
  text-align: center;
  padding: 5rem;
  font-size: 42px;
  line-height: 1.1;
  background-color: #FDDBD0;

`;

export default GlobalStyle;
