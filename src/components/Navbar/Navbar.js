import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  // NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleCLick = () => setClick(!click);

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

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">CENTRE DBT FRANCOPHONE</NavLogo>
            <MobileIcon onClick={handleCLick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleCLick} click={click}>
              <NavItem>
                <NavLinks to="/">ACCUEIL</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/dbt">LA DBT</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/therapy">POUR QUI ? </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/therapists">NOS PARTENAIRES</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact">
                    <Button primary>PRISE DE RENDEZ VOUS</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contact">
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
