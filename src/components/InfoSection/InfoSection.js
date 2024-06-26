import React from "react";
import { Container } from "../../globalStyle";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  VideoWrapper,
  VideoFrame,
  VideoContainer,
} from "./InfoSection.elements";

const InfoSection = ({
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
  videoUrl, // Nouveau prop pour l'URL de la vidéo YouTube
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            {imgStart ? (
              <>
                <InfoColumn>
                  <VideoContainer>
                    {videoUrl ? (
                      <VideoWrapper>
                        <VideoFrame
                          src={videoUrl}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </VideoWrapper>
                    ) : (
                      <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                      </ImgWrapper>
                    )}{" "}
                  </VideoContainer>
                </InfoColumn>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {description}
                    </Subtitle>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {description2}
                    </Subtitle>
                  </TextWrapper>
                </InfoColumn>
              </>
            ) : (
              <>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {description}
                    </Subtitle>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {description2}
                    </Subtitle>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <VideoContainer>
                    {videoUrl ? (
                      <VideoWrapper>
                        <VideoFrame
                          src={videoUrl}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </VideoWrapper>
                    ) : (
                      <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                      </ImgWrapper>
                    )}
                  </VideoContainer>
                </InfoColumn>
              </>
            )}
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
