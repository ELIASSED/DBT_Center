// src/components/Navbar/Navbar.js
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  SubMenuContainer,
  SubMenuItem,
  SubMenuLink
} from "./Navbar.elements";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyle";

const SubMenu = ({ items, closeMobileMenu }) => {
  return (
    <SubMenuContainer>
      {items.map((item, index) => (
        <SubMenuItem key={index}>
          <SubMenuLink as={Link} to={item.path} onClick={closeMobileMenu}>
            {item.title}
          </SubMenuLink>
        </SubMenuItem>
      ))}
    </SubMenuContainer>
  );
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const dbtSubMenuItems = [
    { title: "Qu’est-ce que la DBT ?", path: "/dbt#section1" },
    { title: "Les présupposés de la DBT", path: "/dbt#section2" },
    { title: "La prise en charge DBT", path: "/dbt#section3" },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              CENTRE DBT FRANCOPHONE
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <NavLinks to="/dbt" onClick={closeMobileMenu}>
                  LA THERAPIE COMPORTEMENTALE DIALECTIQUE
                </NavLinks>
                {dropdown && <SubMenu items={dbtSubMenuItems} closeMobileMenu={closeMobileMenu} />}
              </NavItem>
              <NavItem>
                <NavLinks to="/therapy" onClick={closeMobileMenu}>
                  POUR QUI ?
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/module" onClick={closeMobileMenu}>
                  MODULES
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/therapists" onClick={closeMobileMenu}>
                  NOS PARTENAIRES
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact" onClick={closeMobileMenu}>
                    <Button primary>PRISE DE RENDEZ VOUS</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contact" onClick={closeMobileMenu}>
                    <Button fontBig primary>
                      PRISE DE RENDEZ VOUS
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
