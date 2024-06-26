import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjectOne, homeObjectTwo, homeObjectThree } from "./Data";
import { PageContainer, CenteredTitle } from "../../globalStyle";



const Home = () => {
  return (
    <PageContainer>
      <CenteredTitle>CENTRE FRANCOPHONE DE DBT</CenteredTitle>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
    </PageContainer>
  );
};

export default Home;
