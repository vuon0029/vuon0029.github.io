import styled from "styled-components";
import Text from "../Text";
import { ThemeColor } from "../../consts/ThemeValues";
import React from "react";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 10px;
  margin-right: 10px;

  /* Mobile style (max-width: 768px) */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MobileText = styled.h2`
  display: none; /* Hide by default */

  margin-left: 15px;
  margin-right: 15px;

  color: ${ThemeColor.primary};

  @media (max-width: 768px) {
    display: block; /* Show on screens 768px or smaller */
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;

  border-radius: 10px;

  gap: 20px;

  background-color: ${ThemeColor.background};

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 5px rgba(157, 166, 255, 0.3); /* Add shadow on hover */
  }
`;

const BoldAnchor = styled.a`
  font-weight: 700;
  color: ${ThemeColor.primary};
`;

const SummarySection: React.FC<{
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ aboutRef }) => {
  return (
    <SummaryContainer id="about" ref={aboutRef}>
      <MobileText>About</MobileText>
      <Content>
        <Text style={{ fontWeight: 300 }} tag={"header"}>
          I’m a software developer with a passion for transforming beautifully
          crafted designs into interactive, intuitive, and responsive user
          interfaces.
        </Text>
        <Text style={{ fontWeight: 300 }} tag={"header"}>
          Over the past three years, I’ve had the pleasure to work with
          innovative start-ups like{" "}
          <BoldAnchor
            target="_blank"
            href="https://beta.treehousecommunity.ca/"
          >
            Treehouse
          </BoldAnchor>
          ,{" "}
          <BoldAnchor
            target="_blank"
            href="https://www.algonquincollege.com/applied-research/2022/07/smart-tenant-2/"
          >
            Smart Tenant
          </BoldAnchor>{" "}
          and{" "}
          <BoldAnchor target="_blank" href="https://www.poptikr.com/">
            POPTikR
          </BoldAnchor>
          , where I contributed to developing scalable, secure, and
          user-friendly web and mobile applications.
        </Text>
        <Text style={{ fontWeight: 300 }} tag={"header"}>
          In my free time, I love exploring my creativity through learning new
          musical instruments and making music, while also staying active with
          climbing and working out.
        </Text>
      </Content>
    </SummaryContainer>
  );
};

export default SummarySection;
