// src/components/Navbar/Navbar.elements.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyle";

export const Nav = styled.nav`
  background: rgba(62, 71, 70, 0.85);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: background 0.3s ease;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  &:hover > div {
    display: flex;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1.5rem 2rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #8daa9d;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    color: #8daa9d;
    transition: color 0.3s ease;
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    flex-direction: column;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const SubMenuContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  background: rgba(62, 71, 70, 0.95);
  display: none;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`;

export const SubMenuItem = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
  width: 100%;
`;

export const SubMenuLink = styled(Link)`
  color: #fff;
  background: rgba(62, 71, 70, 0.85);
  width: 100%;
  display: block;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: rgba(50, 60, 60, 0.85);
    color: #fff;
  }
`;
