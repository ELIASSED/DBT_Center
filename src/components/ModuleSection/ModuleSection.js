// ModuleSection.js
import React from "react";
import {
  ModuleSec,
  ModuleRow,
  ModuleColumn,
  TopLine,
  SubTitle,
  TextWrapper,
  Heading,
} from "./ModuleSection.elements";

const ModuleSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  description,
  description2,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
}) => {
  return (
    <ModuleSec lightBg={lightBg}>
      <ModuleRow>
        <ModuleColumn>
          <TextWrapper>
            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>

              <SubTitle lightText={lightText}>{description}</SubTitle>
              <SubTitle lightTextDesc={lightTextDesc}>
                {description2}
              </SubTitle>

          </TextWrapper>
        </ModuleColumn>
      </ModuleRow>
    </ModuleSec>
  );
};

export default ModuleSection;
