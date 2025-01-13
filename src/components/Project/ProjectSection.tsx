import styled from "styled-components";

import treehouse from "../../assets/treehouse.png";
import ogf from "../../assets/ogf.png";
import smartTenant from "../../assets/smart-tenant.jpg";
import poptikr from "../../assets/poptikr.png";
import ProjectItem from "./ProjectItem";
import Text from "../Text";
import React from "react";

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const ProjectSection: React.FC<{
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ projectsRef }) => {
  return (
    <ProjectContainer id="projects" ref={projectsRef}>
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
            <Text tag={"body"}>
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
            <Text tag={"body"}>
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
            <Text tag={"body"}>
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
            <Text tag={"body"}>
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
