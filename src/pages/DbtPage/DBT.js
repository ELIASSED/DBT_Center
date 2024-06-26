// src/pages/DBT.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DBT1 from "./DBT1";
import DBT2 from "./DBT2";


const DBT = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <DBT1 id="section1" />
      <DBT2 id="section2" />

    </>
  );
};

export default DBT;
