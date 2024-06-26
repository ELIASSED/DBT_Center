import React from "react";
import TherapySection from "../../components/TherapySection/TherapySection";

import { RevTherapySection } from "../../components/RevTherapySection/RevTherapySection";
import {
  dbtPoint,
  dbtPoint1,
  dbtPoint2,
  dbtPoint3,
  dbtPoint4,
  dbtPoint5,
  dbtPoint6,
  dbtPoint7,
  dbtPoint8,
} from "./Data";
import ModuleSection from "../../components/ModuleSection/ModuleSection";

const DBT2 = () => {
  return (
    <section id="section2">
      <TherapySection {...dbtPoint} />

      <ModuleSection {...dbtPoint1} />
      <ModuleSection {...dbtPoint2} />
      <ModuleSection {...dbtPoint3} />
      <ModuleSection {...dbtPoint4} />

      <RevTherapySection {...dbtPoint5} />

      <ModuleSection {...dbtPoint6} />
      <ModuleSection {...dbtPoint7} />
      <ModuleSection {...dbtPoint8} />
    </section>
  );
};

export default DBT2;
