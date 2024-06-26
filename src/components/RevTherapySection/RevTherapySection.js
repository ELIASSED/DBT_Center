import React from "react";
import { Container } from "../../globalStyle";
import {
  RevTherapySec,
  RevTherapyRow,
  RevTherapyColumn,
  RevTherapyTextWrapper,
  RevTherapyTopLine,
  RevTherapyHeading,
  RevTherapySubtitle,
  RevTherapyImgWrapper,
  RevTherapyImg,
  RevTherapyVideoWrapper,
  RevTherapyVideoFrame,
} from "./RevTherapySection.elements";

export const RevTherapySection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  description,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
  videoUrl,
}) => {
  return (
    <RevTherapySec lightBg={lightBg}>
      <Container>
        <RevTherapyRow imgStart={imgStart}>
          {imgStart ? (
            <>
              <RevTherapyColumn>
                <RevTherapyVideoWrapper>
                  {videoUrl ? (
                    <RevTherapyVideoFrame
                      src={videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <RevTherapyImgWrapper start={start}>
                      <RevTherapyImg src={img} alt={alt} />
                    </RevTherapyImgWrapper>
                  )}
                </RevTherapyVideoWrapper>
              </RevTherapyColumn>
              <RevTherapyColumn>
                <RevTherapyTextWrapper>
                  <RevTherapyTopLine lightTopLine={lightTopLine}>
                    {topLine}
                  </RevTherapyTopLine>
                  <RevTherapyHeading lightText={lightText}>
                    {headline}
                  </RevTherapyHeading>
                  <RevTherapySubtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </RevTherapySubtitle>
                </RevTherapyTextWrapper>
              </RevTherapyColumn>
            </>
          ) : (
            <>
              <RevTherapyColumn>
                <RevTherapyTextWrapper>
                  <RevTherapyTopLine lightTopLine={lightTopLine}>
                    {topLine}
                  </RevTherapyTopLine>
                  <RevTherapyHeading lightText={lightText}>
                    {headline}
                  </RevTherapyHeading>
                  <RevTherapySubtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </RevTherapySubtitle>
                </RevTherapyTextWrapper>
              </RevTherapyColumn>
              <RevTherapyColumn>
                <RevTherapyVideoWrapper>
                  {videoUrl ? (
                    <RevTherapyVideoFrame
                      src={videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <RevTherapyImgWrapper start={start}>
                      <RevTherapyImg src={img} alt={alt} />
                    </RevTherapyImgWrapper>
                  )}
                </RevTherapyVideoWrapper>
              </RevTherapyColumn>
            </>
          )}
        </RevTherapyRow>
      </Container>
    </RevTherapySec>
  );
};

export default RevTherapySection;
