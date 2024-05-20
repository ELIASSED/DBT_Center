import React from "react";
import ParagraphSection from "../../components/ParagraphSection/ParagraphSection";
import {
  dbtObjectOne,
  dbtObjectTwo,
  dbtObjectThree,
  dbtObjectFour,
  dbtObjectFive,
  dbtObjectSix,
  dbtObjectSeven,
  dbtObjectEight,
  dbtObjectNine,
  dbtObjectTen,
  dbtObjectEleven,
  dbtObjectTwelve,
  dbtObjectThirteen,
} from "./Data";

const DBT = ({lightBg}) => {
  return (
    <>
      <ParagraphSection {...dbtObjectOne} />
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
      <ParagraphSection {...dbtObjectTwelve} />
      <ParagraphSection {...dbtObjectThirteen} />
    

       
    </>
  );
};

export default DBT;
