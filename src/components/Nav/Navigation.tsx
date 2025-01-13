import React from "react";
import styled from "styled-components";
import { ThemeColor, ThemeSize } from "../../consts/ThemeValues";

const NavigatorSection = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;

  margin-top: 70px;

  gap: 5px;

  button {
    background: none;
    border: none;
    color: ${ThemeColor.paragraph};
    font-weight: 300;
    font-size: ${ThemeSize.header.fontSize}px;
    text-decoration: none;
    cursor: pointer;

    letter-spacing: normal;
    transition: all 0.15s ease-in-out;

    &.active {
      color: ${ThemeColor.primary};
      font-weight: 700; /* Bold for the active section */
      letter-spacing: 3px;
    }
  }
`;

const Navigation: React.FC<{
  scrollToSection: (ref: React.RefObject<HTMLDivElement>, id: string) => void;
  activeSection: string;
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
  experienceRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({
  scrollToSection,
  activeSection,
  aboutRef,
  experienceRef,
  projectsRef,
}) => {
  return (
    <NavigatorSection>
      <button
        className={activeSection === "about" ? "active" : ""}
        onClick={() => scrollToSection(aboutRef, "about")}
      >
        About
      </button>
      <button
        className={activeSection === "experience" ? "active" : ""}
        onClick={() => scrollToSection(experienceRef, "experience")}
      >
        Experience
      </button>
      <button
        className={activeSection === "projects" ? "active" : ""}
        onClick={() => scrollToSection(projectsRef, "projects")}
      >
        Projects
      </button>
    </NavigatorSection>
  );
};

export default Navigation;
