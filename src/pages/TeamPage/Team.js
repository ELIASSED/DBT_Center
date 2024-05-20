// Assurez-vous d'importer les données correctement
import React from "react";
import TeamSection from "../../components/TeamSection/TeamSection";
import { equipe } from "./Data";

const Team = () => {
  return (
    <>
      <TeamSection members={equipe.membres} />
    </>
  );
};

export default Team;
