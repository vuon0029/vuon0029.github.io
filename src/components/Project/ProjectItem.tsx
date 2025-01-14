import React, { ReactNode } from "react";
import styled from "styled-components";
import Text from "../Text";
import { ThemeColor } from "../../consts/ThemeValues";
import TechChip from "../TechChip/TechChip";

const Container = styled.a`
  display: flex;

  text-decoration: none;

  flex-direction: row;

  gap: 15px;

  padding: 15px;
  margin: 10px;
  border-radius: 10px;

  background-color: ${ThemeColor.background};

  transition: box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;

    box-shadow: 0px 4px 5px rgba(157, 166, 255, 0.3); /* Add shadow on hover */
  }

  /* Mobile style (max-width: 768px) */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;

  flex-flow: wrap;

  align-items: center;

  margin-top: 10px;
  margin-bottom: 10px;

  gap: 10px;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 30%;

  /* Mobile style (max-width: 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 70%;

  /* Mobile style (max-width: 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;

  object-fit: contain;

  border-radius: 10px;

  /* Mobile style (max-width: 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

const ProjectItem: React.FC<{
  data: {
    name: string;
    imgSrc: string;
    href: string;
    techstack: string[];
    renderDescription: () => ReactNode;
  };
}> = ({ data: { renderDescription, techstack, name, imgSrc, href } }) => {
  return (
    <Container target={"_blank"} href={href}>
      <ImageContainer>
        <ProjectImage src={imgSrc} alt={name} />
      </ImageContainer>

      <TextContent>
        <Text
          style={{
            color: ThemeColor.primary,
            fontWeight: 700,
          }}
          tag="header"
        >
          {name}
        </Text>

        <ChipContainer>
          {techstack.map((tech, index) => {
            return <TechChip key={index} name={tech} />;
          })}
        </ChipContainer>

        {renderDescription()}
      </TextContent>
    </Container>
  );
};

export default ProjectItem;
