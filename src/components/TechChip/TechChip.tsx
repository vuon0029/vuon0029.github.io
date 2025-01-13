import React from "react";
import styled from "styled-components";
import { ThemeColor } from "../../consts/ThemeValues";

const Chip = styled.div`
  background-color: ${ThemeColor.chipBG};
  color: ${ThemeColor.chipColor};

  padding-left: 15px;
  padding-right: 15px;

  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 14px;
  font-weight: 500;

  border-radius: 50px;
`;

const TechChip: React.FC<{
  name: string;
}> = ({ name }) => {
  return <Chip>{name}</Chip>;
};

export default TechChip;
