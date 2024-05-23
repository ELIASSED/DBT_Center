// src/pages/DBT1.js
import React from "react";
import ParagraphSection from "../../components/ParagraphSection/ParagraphSection";
import {
  dbtObjectOne,
  dbtObject,
  dbtobjectWithStats,
  dbtobject
} from "./Data";
import styled from "styled-components";

const VideoContainer = styled.div`
  background: #c49964;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const VideoTitle = styled.h2`
  text-align: center;
  padding: 20px 0;
  margin-bottom: 15px;
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VideoFrame = styled.iframe`
  width: 560px;
  height: 315px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const DBT1 = ({ lightBg }) => {
  return (
    <section id="section1">
      <ParagraphSection {...dbtObjectOne} />
      <ParagraphSection {...dbtObject} />
      <ParagraphSection {...dbtobjectWithStats} />
      <ParagraphSection {...dbtobject} />

      <VideoContainer lightBg={lightBg}>
        <VideoTitle>Vidéos Informatives sur la DBT</VideoTitle>
        <VideoWrapper>
          <VideoFrame
            src="https://www.youtube.com/embed/bULL3sSc_-I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <VideoFrame
            src="https://www.youtube.com/embed/rU7Knx3VByA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      </VideoContainer>
    </section>
  );
};

export default DBT1;
