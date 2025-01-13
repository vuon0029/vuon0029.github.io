import React, { ReactNode } from "react";
import styled from "styled-components";
import Text from "../Text";
import { ThemeColor } from "../../consts/ThemeValues";
import TechChip from "../TechChip/TechChip";

const Container = styled.div`
  display: flex;

  flex-direction: row;

  gap: 15px;

  padding: 15px;
  margin: 10px;
  border-radius: 10px;

  background-color: ${ThemeColor.background};

  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;

    box-shadow: 0px 4px 5px rgba(157, 166, 255, 0.3); /* Add shadow on hover */
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

const ImageContainer = styled.div``;

const TextContent = styled.div``;

const ProjectImage = styled.img`
  width: 350px;
  height: auto;

  object-fit: contain;

  border-radius: 10px;

  background-color: black;
`;

const ProjectItem: React.FC<{
  data: {
    name: string;
    imgSrc: string;
    techstack: string[];
    renderDescription: () => ReactNode;
  };
}> = ({ data: { renderDescription, techstack, name, imgSrc } }) => {
  return (
    <Container>
      <ImageContainer>
        <ProjectImage src={imgSrc} alt={name} />
      </ImageContainer>

      <TextContent>
        <Text
          style={{
            color: ThemeColor.primary,
            fontWeight: 400,
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
