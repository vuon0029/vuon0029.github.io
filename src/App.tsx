import styled, { createGlobalStyle } from "styled-components";
import { ThemeColor } from "./consts/ThemeValues";
import Text from "./components/Text";

import React from "react";

import SplineBackground from "./components/SplineBackground/SplineBackground";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ProjectSection from "./components/Project/ProjectSection";
import SummarySection from "./components/Summary/SummarySection";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Nav/Navigation";

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

  padding-top: 300px;
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

function App() {
  const [activeSection, setActiveSection] = React.useState<string>("about");

  // Refs for each section
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const experienceRef = React.useRef<HTMLDivElement | null>(null);
  const projectsRef = React.useRef<HTMLDivElement | null>(null);
  // Scroll to a section when a button is clicked
  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    id: string
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: id === "projects" ? "start" : "center",
      }); // Smooth scrolling
      setActiveSection(id); // Update active section
      history.pushState(null, "", `#${id}`); // Update URL hash
    }
  };

  React.useEffect(() => {
    // IntersectionObserver to detect active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    // Observe each section
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  React.useEffect(() => {
    // Scroll to section on initial load if there's a hash in the URL
    const hash = window.location.hash.replace("#", ""); // Remove the "#" from the hash
    if (hash === "about" && aboutRef.current)
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    if (hash === "experience" && experienceRef.current)
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    if (hash === "projects" && projectsRef.current)
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, []);

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
          <Navigation
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <Footer />
        </StaticContainer>

        <ScrollableContainer>
          <SummarySection aboutRef={aboutRef} />
          <ExperienceSection experienceRef={experienceRef} />
          <ProjectSection projectsRef={projectsRef} />
        </ScrollableContainer>
      </AppContainer>
    </GlobalContainer>
  );
}

export default App;
