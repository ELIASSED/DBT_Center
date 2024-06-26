import React from "react";
import TherapySection from "../../components/TherapySection/TherapySection";
import ModuleSection from "../../components/ModuleSection/ModuleSection";
import {
  therapyObject,
  therapyObjectOne,
  therapyObjectTwo
} from "./Data";
const Therapy = () => {
  return (
    <>
      <ModuleSection {...therapyObject}/>
      <ModuleSection {...therapyObjectOne} />
      <ModuleSection {...therapyObjectTwo} />
    </>
  );
};

export default Therapy;
