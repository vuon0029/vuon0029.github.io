import styled from "styled-components";

import moodleLTC from "../../assets/moodle-ltc.png";
import treehouse from "../../assets/treehouse.png";
import ogf from "../../assets/ogf.png";
import smartTenant from "../../assets/smart-tenant.jpg";
import poptikr from "../../assets/poptikr.png";
import ProjectItem from "./ProjectItem";
import Text from "../Text";
import React from "react";
import { ThemeColor } from "../../consts/ThemeValues";

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 10px;

  /* Mobile style (max-width: 768px) */
  @media (max-width: 768px) {
    padding-bottom: 100px;
  }
`;

const MobileText = styled.h2`
  display: none; /* Hide by default */
  padding-left: 25px;
  padding-right: 25px;
  color: ${ThemeColor.primary};

  @media (max-width: 768px) {
    display: block; /* Show on screens 768px or smaller */
  }
`;

const BoldAnchor = styled.a`
  font-weight: 700;
  color: ${ThemeColor.primary};
`;

const ProjectSection: React.FC<{
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ projectsRef }) => {
  return (
    <ProjectContainer id="projects" ref={projectsRef}>
      <MobileText>Projects</MobileText>
      <ProjectItem
        data={{
          name: "Lambton College Long-term Care Website",
          imgSrc: moodleLTC,
          href: "https://lambtonmoc.contactnorth.ca/",
          techstack: ["PHP", "MySQL", "NodeJS", "Moodle"],
          renderDescription: () => (
            <Text
              style={{
                fontWeight: 300,
              }}
              tag={"body"}
            >
              The Lambton College LTC platform is a bilingual learning
              management system that enables healthcare workers to register for
              and complete micro-credential courses required for long-term care
              certification. The platform supports over 40 courses in English
              and French, streamlining enrolment, training delivery, and
              certification for learners preparing to work in regulated care
              settings.
              <BoldAnchor
                target="_blank"
                href="https://www.lambtoncollege.ca/news/article/2026/02/04/lambton-college-adopts-care-passport-to-prepare-students-for-long-term-care-careers"
              >
                View article here
              </BoldAnchor>
            </Text>
          ),
        }}
      />
      <ProjectItem
        data={{
          name: "Treehouse Community Website",
          imgSrc: treehouse,
          href: "https://beta.treehousecommunity.ca/",
          techstack: [
            "JavaScript",
            "TypeScript",
            "ReactJS",
            "React Native",
            "GraphQL",
            "NextJS",
            "Styled Components",
          ],
          renderDescription: () => (
            <Text
              style={{
                fontWeight: 300,
              }}
              tag={"body"}
            >
              A platform designed to support maternal and family care by
              connecting families, healthcare providers, and practices in a
              unified digital space.
            </Text>
          ),
        }}
      />
      <ProjectItem
        data={{
          name: "Ottawa Grassroots App",
          imgSrc: ogf,
          href: "https://ottawagrassrootsfestival.com/algonquin-college-mobile-app-team/",
          techstack: ["JavaScript", "React Native", "Expo", "Google Firebase"],
          renderDescription: () => (
            <Text
              style={{
                fontWeight: 300,
              }}
              tag={"body"}
            >
              An app created to enhance event discovery and artist engagement
              for the Ottawa Grassroots Festival with accessibility in mind.
            </Text>
          ),
        }}
      />
      <ProjectItem
        data={{
          name: "Smart Tenant App",
          imgSrc: smartTenant,
          href: "https://www.algonquincollege.com/applied-research/2022/07/smart-tenant-2/",
          techstack: [
            "JavaScript",
            "TypeScript",
            "React Native",
            "Expo",
            "Firebase",
            "Styled Components",
          ],
          renderDescription: () => (
            <Text
              style={{
                fontWeight: 300,
              }}
              tag={"body"}
            >
              An app developed to connect tenants with their local communities,
              fostering better communication and engagement. Includes features
              such as real-time messaging and a user-friendly interface to help
              tenants navigate their surroundings and stay informed.
            </Text>
          ),
        }}
      />
      <ProjectItem
        data={{
          name: "POPTikR App",
          imgSrc: poptikr,
          href: "https://www.algonquincollege.com/applied-research/2022/03/pop-tikr-shop-tour-local/",
          techstack: [
            "JavaScript",
            "TypeScript",
            "React Native",
            "Expo",
            "Amazon Web Services",
            "Styled Components",
          ],
          renderDescription: () => (
            <Text
              style={{
                fontWeight: 300,
              }}
              tag={"body"}
            >
              An app designed to help users discover local deals on goods and
              services, promoting community-based shopping and exploration.
              Focused on creating an engaging user experience by integrating
              features such as real-time updates and geolocation for seamless
              navigation.
            </Text>
          ),
        }}
      />
    </ProjectContainer>
  );
};

export default ProjectSection;
