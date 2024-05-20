export const infosPratiques = {
  titre: "Prise de rendez-vous",
  schema: [
    {
      schema: "Étape 1",
      TeamMemberDescription:
        "RDV avec un psychiatre pour une première évaluation et mise en place d’un suivi",
    },
    {
      schema: "Étape 2",
      TeamMemberDescription:
        "Orientation vers la DBT ou d’autres approches si les critères diagnostics ne correspondent pas",
    },
    {
      schema: "Étape 3",
      TeamMemberDescription:
        "Prise de rendez-vous avec l’un des psychologues par mail : team.psychologues@gmail.com",
    },
  ],
};

export const tarifsEtRemboursement = {
  tarifs: {
    psychiatre: {
      consultation: "Consultation avec un psychiatre",
      convention: "Conventionné secteur 2",
      tarif: "150 euros la séance",
      carteVitale: "Carte Vitale acceptée",
      moyensPaiement: "Moyens de paiement : chèques, espèces et carte bancaire",
    },
    psychologue: {
      consultation: "Consultation avec un psychologue",
      tarif: "90 euros la séance",
      moyensPaiement:
        "Moyens de paiement : chèques, espèces et virement bancaire",
    },
    remboursement: {
      titre: "Remboursements",
      psychologue:
        "Certaines mutuelles remboursent une partie des consultations.",
      psychiatre: "Remboursement avec la sécurité sociale et la mutuelle.",
      indemnisations:
        "Effectuez une demande d'indemnisation en cas de victime d'infraction : https://www.service-public.fr/particuliers/vosdroits/R18782",
    },
  },
};
