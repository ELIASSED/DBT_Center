// src/pages/DBT3.js
import React from "react";
import styled from "styled-components";
import TherapySection from "../../components/TherapySection/TherapySection";
import RevTherapySection from "../../components/RevTherapySection/RevTherapySection";

import { ModuleSection } from "../../components";
import { PageContainer, CenteredTitle } from "../../globalStyle";
import {
  dbtPoint10,
  dbtPoint11,
  dbtPoint12,
  dbtPoint13,
  dbtPoint14,
  dbtPoint15,
  dbtPoint16,
  dbtPoint17
} from "./Data";
import { InfoSection } from "../../components";

// Définir le composant DBT3
const DBT3 = () => {
  return (
    <section id="section3">
      <ModuleSection {...dbtPoint10} />
      <RevTherapySection {...dbtPoint11} />
      <TherapySection {...dbtPoint12} />
      <ModuleSection {...dbtPoint13} />
      <RevTherapySection {...dbtPoint14} />
      <ModuleSection {...dbtPoint15} />
      <TherapySection {...dbtPoint16} />
      <RevTherapySection {...dbtPoint17} />

    </section>
  );
};

export default DBT3;
