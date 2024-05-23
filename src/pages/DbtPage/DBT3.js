// src/pages/DBT3.js
import React from "react";
import ParagraphSection from "../../components/ParagraphSection/ParagraphSection";
import { dbtObjectTwelve } from "./Data";

const DBT3 = () => {
  return (
    <section id="section3">
      <ParagraphSection {...dbtObjectTwelve} />
    </section>
  );
};

export default DBT3;
