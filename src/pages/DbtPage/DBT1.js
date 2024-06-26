import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { PageContainer, CenteredTitle } from "../../globalStyle";
import ModuleSection from "../../components/ModuleSection/ModuleSection";
import {
  dbtObject1,
  dbtObject3,
  dbtObject2,
  dbtObject4,
  dbtInfoObject,
} from "./Data";

const DBT1 = ({ lightBg }) => {
  return (
    <section id="section1">
      <PageContainer>
        <CenteredTitle>
          Qu’est-ce que la Dialectic Behavioral Therapy ?
        </CenteredTitle>
        <InfoSection {...dbtObject1} />
        <InfoSection {...dbtObject2} />
        <InfoSection {...dbtObject3} />
        <InfoSection {...dbtObject4} />
      </PageContainer>
      <PageContainer>
        <ModuleSection {...dbtInfoObject} />
      </PageContainer>
    </section>
  );
};

export default DBT1;
