// src/pages/DBT2.js
import React from "react";
import ParagraphSection from "../../components/ParagraphSection/ParagraphSection";
import {
  dbtObjectTwo,
  dbtObjectThree,
  dbtObjectFour,
  dbtObjectFive,
  dbtObjectSix,
  dbtObjectSeven,
  dbtObjectEight,
  dbtObjectNine,
  dbtObjectTen,
  dbtObjectEleven
} from "./Data";

const DBT2 = () => {
  return (
    <section id="section2">
      <ParagraphSection {...dbtObjectTwo} />
      <ParagraphSection {...dbtObjectThree} />
      <ParagraphSection {...dbtObjectFour} />
      <ParagraphSection {...dbtObjectFive} />
      <ParagraphSection {...dbtObjectSix} />
      <ParagraphSection {...dbtObjectSeven} />
      <ParagraphSection {...dbtObjectEight} />
      <ParagraphSection {...dbtObjectNine} />
      <ParagraphSection {...dbtObjectTen} />
      <ParagraphSection {...dbtObjectEleven} />
    </section>
  );
};

export default DBT2;
