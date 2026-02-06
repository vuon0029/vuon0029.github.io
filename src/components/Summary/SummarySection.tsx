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
          I’m a Full Stack Developer with over four years of experience building
          reliable, user-centered web and mobile applications, with a focus on
          translating well-crafted designs into intuitive and responsive
          interfaces.
        </Text>
        <Text style={{ fontWeight: 300 }} tag={"header"}>
          I’ve worked across startups and production environments, including{" "}
          <BoldAnchor
            target="_blank"
            href="https://www.lambtoncollege.ca/news/article/2026/02/04/lambton-college-adopts-care-passport-to-prepare-students-for-long-term-care-careers"
          >
            Lambton College
          </BoldAnchor>
          ,{" "}
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
          , contributing to scalable, secure systems ranging from LMS platforms
          and backend services to mobile applications and admin dashboards.
        </Text>

        <Text style={{ fontWeight: 300 }} tag={"header"}>
          Outside of work, I enjoy spending time{" "}
          <BoldAnchor
            target="_blank"
            href="https://on.soundcloud.com/SnoVXb2lvOxetaKqea"
          >
            making music
          </BoldAnchor>{" "}
          and learning new instruments, and I keep myself active through
          climbing and{" "}
          <BoldAnchor
            target="_blank"
            href="https://www.instagram.com/kiet.sleefs/"
          >
            strength training!
          </BoldAnchor>
        </Text>
      </Content>
    </SummaryContainer>
  );
};

export default SummarySection;
