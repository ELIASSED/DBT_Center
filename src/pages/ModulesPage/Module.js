import React from "react";
import ModuleSection from "../../components/ModuleSection/ModuleSection";
import { moduleObjectOne, moduleObjectTwo } from "./Data";

const Module = () => {
  return (
    <>
     <ModuleSection lightBg={true} title={moduleObjectOne.title} content={moduleObjectOne.content} />
      <ModuleSection lightBg={false} title={moduleObjectTwo.title} content={moduleObjectTwo.content} />
 
    </>
  );
};

export default Module;
