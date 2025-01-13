import styled, { createGlobalStyle } from "styled-components";
import { ThemeColor } from "./consts/ThemeValues";
import Text from "./components/Text";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import React from "react";

import SplineBackground from "./components/SplineBackground/SplineBackground";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ProjectSection from "./components/Project/ProjectSection";
import SummarySection from "./components/Summary/SummarySection";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ThemeColor.background};
  }

  p {
    color: ${ThemeColor.paragraph}
  }
`;

const GlobalContainer = styled.div`
  display: flex;
`;

const AppContainer = styled.div`
  display: flex;

  height: 100vh;

  gap: 20px;

  justify-content: center;
`;

const StaticContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 70px;
  padding-left: 50px;

  flex: 1;
  max-width: 21%;

  overflow: hidden;
  height: 100vh;

  z-index: 1;
`;

const ScrollableContainer = styled.div`
  display: flex;

  flex-direction: column;

  padding-top: 150px;
  padding-left: 35px;
  padding-bottom: 150px;
  padding-right: 100px;

  flex: 1;
  max-width: 79%; /* Prevent the child from exceeding 50% of the parent width */

  gap: 300px;

  overflow-y: auto; /* Allow vertical scrolling */
  height: 100vh; /* Full height */

  z-index: 1;
`;

const HeaderSection = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;
`;

const NavigatorSection = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 70px;

  gap: 5px;
`;

const FooterContact = styled.div`
  display: flex;

  flex-direction: row;

  margin-bottom: 50px;

  margin-top: auto;

  gap: 20px;
`;

function App() {
  const [currentSection] = React.useState<"about" | "experience" | "projects">(
    "about"
  );

  return (
    <GlobalContainer>
      <GlobalStyle />
      <SplineBackground />

      <AppContainer>
        <StaticContainer>
          <HeaderSection>
            <Text tag={"banner"}>Kiet Vuong</Text>
            <div>
              <Text tag={"header"}>Mobile Application Developer</Text>
              <Text tag={"header"}>Front End Developer</Text>
            </div>
          </HeaderSection>
          <NavigatorSection>
            <Text
              style={{ fontWeight: currentSection === "about" ? 700 : 300 }}
              color={
                currentSection === "about"
                  ? ThemeColor.primary
                  : ThemeColor.paragraph
              }
              bold
              tag={"header"}
            >
              About
            </Text>
            <Text
              style={{
                fontWeight: currentSection === "experience" ? 700 : 300,
              }}
              color={
                currentSection === "experience"
                  ? ThemeColor.primary
                  : ThemeColor.paragraph
              }
              tag={"header"}
            >
              Experience
            </Text>
            <Text
              style={{ fontWeight: currentSection === "projects" ? 700 : 300 }}
              color={
                currentSection === "projects"
                  ? ThemeColor.primary
                  : ThemeColor.paragraph
              }
              tag={"header"}
            >
              Projects
            </Text>
          </NavigatorSection>
          <FooterContact>
            <FiGithub color={ThemeColor.primary} size={40} />
            <FiLinkedin color={ThemeColor.primary} size={40} />
          </FooterContact>
        </StaticContainer>

        <ScrollableContainer>
          <SummarySection />
          <ExperienceSection />
          <ProjectSection />
        </ScrollableContainer>
      </AppContainer>
    </GlobalContainer>
  );
}

export default App;
