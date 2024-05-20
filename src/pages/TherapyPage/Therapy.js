import React from "react";
import TherapySection from "../../components/TherapySection/TherapySection";
import {
  therapyObjectOne,
  therapyObjectThree,
  therapyObjectTwo
} from "./Data";
const Therapy = () => {
  return (
    <>
      <TherapySection {...therapyObjectOne} />
      <TherapySection {...therapyObjectTwo} />
      <TherapySection {...therapyObjectThree} />
    </>
  );
};

export default Therapy;
