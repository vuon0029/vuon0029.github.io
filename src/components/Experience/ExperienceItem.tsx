import React, { ReactNode } from "react";
import styled from "styled-components";
import Text from "../Text";
import { ThemeColor } from "../../consts/ThemeValues";
import TechChip from "../TechChip/TechChip";

const Container = styled.div`
  display: flex;

  flex-direction: column;

  padding: 15px;
  margin: 10px;
  border-radius: 10px;

  background-color: ${ThemeColor.background};

  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    cursor: default;

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

const ExperienceItem: React.FC<{
  data: {
    company: string;
    title: string;
    timespan: string;
    techstack: string[];
    renderDescription: () => ReactNode;
  };
}> = ({ data: { company, renderDescription, timespan, techstack, title } }) => {
  return (
    <Container>
      <Text
        style={{
          color: ThemeColor.primary,
          fontWeight: 700,
        }}
        tag="header"
      >
        {title} • {company}
      </Text>
      <Text tag="body">{timespan}</Text>

      <ChipContainer>
        {techstack.map((tech, index) => {
          return <TechChip key={index} name={tech} />;
        })}
      </ChipContainer>

      {renderDescription()}
    </Container>
  );
};

export default ExperienceItem;
