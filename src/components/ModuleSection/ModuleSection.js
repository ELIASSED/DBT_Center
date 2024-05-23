import React from "react";
import { Container } from "../../globalStyle";

import {
  ModuleSec,
  Section,
  SubSection,
  Paragraph,
  List,
  ListItem,
  SubTitle,
  ContentWrapper,
  ModuleRow,
  ModuleColumn,
} from "./ModuleSection.elements";
import { moduleObjectOne } from "../../pages/ModulesPage/Data";

const ModuleSection = ({ title }) => {
  return (
    <>
    
        <ModuleSec><ModuleRow> <ModuleColumn>
            <SubTitle>{title}</SubTitle>
            <ContentWrapper>
              {moduleObjectOne.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return <Paragraph key={index}>{item.text}</Paragraph>;
                }
                if (item.type === "subSection") {
                  return (
                    <SubSection key={index}>
                      <SubTitle>{item.title}</SubTitle>
                      <ContentWrapper>
                        {item.content.map((subItem, subIndex) => {
                          if (subItem.type === "paragraph") {
                            return (
                              <Paragraph key={subIndex}>
                                {subItem.text}
                              </Paragraph>
                            );
                          }
                          if (subItem.type === "list") {
                            return (
                              <List key={subIndex}>
                                {subItem.items.map((listItem, listIndex) => (
                                  <ListItem key={listIndex}>
                                    {listItem.text}
                                  </ListItem>
                                ))}
                              </List>
                            );
                          }
                          return null;
                        })}
                      </ContentWrapper>
                    </SubSection>
                  );
                }
                return null;
              })}
            </ContentWrapper></ModuleColumn>
      </ModuleRow>
        
        </ModuleSec>

    </>
  );
};

export default ModuleSection;
