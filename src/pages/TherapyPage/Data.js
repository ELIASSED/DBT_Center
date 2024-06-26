import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const DescriptionTitle = styled.h3`
  text-align: left;
  margin-bottom: 10px;
`;

const DescriptionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const DescriptionListItem = styled.li`
  margin-bottom: 20px;
`;

const StrongText = styled.strong`
  font-weight: bold;
`;

const TherapyDescription = ({ title, items }) => (
  <DescriptionContainer>
    <DescriptionTitle>
      <StrongText>{title}</StrongText>
    </DescriptionTitle>
    <DescriptionList>
      {items.map((item, index) => (
        <DescriptionListItem key={index}>
          <StrongText>{item.title}</StrongText>: {item.description}
        </DescriptionListItem>
      ))}
    </DescriptionList>
  </DescriptionContainer>
);

export const therapyObject = {
  lightBg: true,
  primary: true,
  imgStart: "start",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "",
  description: (
    <>
      <h1 style={{ textAlign: "center" }}>
        <strong>Pour qui ?</strong>
      </h1>
      <br />
      <h5 style={{ textAlign: "center", paddingLeft: "60px", paddingRight: "60px" }}>
        Tous les protocoles proposés, pour les adultes et les enfants et adolescents sont validés scientifiquement, par des centaines de publications depuis 30 ans.
      </h5>
    </>
  ),
  headline: "",
  lightText: true,
  topLine: "",
  img: "",
  alt: "Image",
  start: "true",
};

export const therapyObjectOne = {
  lightBg: false,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "",
  description: (
    <TherapyDescription
      title="Les Adultes"
      items={[
        {
          title: "Protocole DBT Standard",
          description:
            "Indiqué pour toutes situations de dysrégulation émotionnelle chez l’adulte : troubles de la personnalité, troubles de l’humeur, troubles anxieux, troubles des conduites alimentaires. 80 % d’efficacité au bout d’un an de traitement.",
        },
        {
          title: "Protocole DBT Substance Use Disorder",
          description:
            "Indiqué pour toutes les formes d’addiction.",
        },
        {
          title: "Protocole DBT Complex-PTSD Bohus & Mélanie Hearned",
          description:
            "Indiqués en cas de trauma complexe. Ces deux protocoles associent les compétences de régulation émotionnelle à la thérapie d’exposition prolongée. Evidence Based. 90 % d’efficacité au bout d’un an de traitement.",
        },
        {
          title: "Protocole DBT Radically Open",
          description:
            "La thérapie comportementale dialectique radicalement ouverte (RO-DBT) est une thérapie destinée aux personnes ayant un style d'adaptation trop contrôlé et souffrant d'un trouble résistant au traitement, comme la dépression et l'anorexie. La RO-DBT aide à lutter contre la solitude émotionnelle et enseigne des compétences utiles pour mieux prendre conscience de la manière dont les signaux sociaux affectent les relations, ainsi que pour être plus ouvert et réceptif à l'environnement afin d'apprendre. La RO-DBT dispose d'une base factuelle solide avec cinq essais publiés à ce jour (par exemple Lynch, Hempel, & Dunkley, 2015).",
        },
      ]}
    />
  ),
  lightText: true,
  topLine: "",
  img: "",
  alt: "",
  start: "false",
};

export const therapyObjectTwo = {
  lightBg: true,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "",
  description: (
    <TherapyDescription
      title="Enfant & Adolescent"
      items={[
        {
          title: "Protocole DBT Teens (groupe multifamille avec ou non la thérapie individuelle)",
          description:
            "Protocole développé par Jill H. Rathus et Alec L. Miller (2015). La DBT pour adolescents consiste à enseigner aux adolescents et aux familles l’utilisation de compétences spécifiques de régulation émotionnelle. Ce traitement peut être proposé à un large éventail de diagnostics partageant la dysrégulation émotionnelle. Selon la littérature scientifique, DBT Teens réduit de 44% les auto-lésions, de 31% les idées suicidaires et de 32% les tentatives de suicide chez les adolescents entre 12 ans et 18 ans. L’efficacité globale du traitement est estimée entre 74% et 80% (Oswald D. Kothgassner et al., 2021 : https://doi.org/10.1017/S0033291721001355 ; Lauren J. Harvey et al. 2023 : https://doi.org/10.1016/j.brat.2023.104408).",
        },
        {
          title: "Protocole DBT Child (entraînement des parents, nombre de séances)",
          description:
            "Inspiré du protocole de FRANCHESKA PEREPLETCHIKOVA, ce protocole a pour objectif la diminution du risque psychopathologique en apprenant aux parents à créer un environnement de validation et permettant de généraliser les techniques DBT enseignées dans le cadre des interactions parents-enfants.",
        },
      ]}
    />
  ),
  lightText: true,
  topLine: "",
  img: "",
  alt: "",
  start: "false",
};
