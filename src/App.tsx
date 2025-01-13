import styled, { createGlobalStyle } from "styled-components";
import { ThemeColor } from "./consts/ThemeValues";
import Text from "./components/Text";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import React from "react";
import ExperienceItem from "./components/Experience/ExperienceItem";
import ProjectItem from "./components/Project/ProjectItem";
import treehouse from "./assets/treehouse.png";
import ogf from "./assets/ogf.png";
import smartTenant from "./assets/smart-tenant.jpg";
import poptikr from "./assets/poptikr.png";
import SplineBackground from "./components/SplineBackground/SplineBackground";

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

const BoldSpan = styled.span`
  font-weight: 700;
  color: ${ThemeColor.primary};
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

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 25px;

  gap: 20px;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
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
          <SummaryContainer>
            <Text style={{ fontWeight: 300 }} tag={"header"}>
              I’m a software developer with a passion for transforming
              beautifully crafted designs into interactive, intuitive, and
              responsive user interfaces.
            </Text>
            <Text style={{ fontWeight: 300 }} tag={"header"}>
              Over the past three years, I’ve had the pleasure to work with
              innovative start-ups like <BoldSpan>Treehouse</BoldSpan>,{" "}
              <BoldSpan>Smart Tenant</BoldSpan>, and{" "}
              <BoldSpan>POPTikR</BoldSpan>, where I contributed to developing
              scalable, secure, and user-friendly web and mobile applications.
            </Text>
            <Text style={{ fontWeight: 300 }} tag={"header"}>
              In my free time, I love exploring my creativity through learning
              new musical instruments and making music, while also staying
              active with climbing and working out.
            </Text>
          </SummaryContainer>
          <ExperienceContainer>
            <ExperienceItem
              data={{
                company: "Treehouse",
                title: "Front End Developer",
                timespan: "August 2022 - August 2024",
                techstack: [
                  "TypeScript",
                  "JavaScript",
                  "ReactJS",
                  "React Native",
                  "GraphQL",
                  "NextJS",
                  "Styled Components",
                ],
                renderDescription: () => (
                  <Text tag={"body"}>
                    Contributed to building a maternal care platform designed to
                    foster a connected community for families, providers, and
                    practices. Collaborated with a cross-functional team to
                    design and implement new features, enhancing the user
                    experience for families and healthcare providers.
                  </Text>
                ),
              }}
            />
            <ExperienceItem
              data={{
                company: "Algonquin College",
                title: "Mobile Application Developer",
                timespan: "August 2022 - August 2024",
                techstack: [
                  "TypeScript",
                  "JavaScript",
                  "React Native",
                  "Google Firebase",
                  "Amazon Web Services",
                  "Expo",
                  "Styled Components",
                ],
                renderDescription: () => (
                  <Text tag={"body"}>
                    Led the development of <BoldSpan>Smart Tenant</BoldSpan>, a
                    mobile app connecting tenants with their local community.
                    Played a key role in developing <BoldSpan>POPTikR</BoldSpan>
                    , a mobile app that enables users to discover local deals on
                    goods and services. Focused on building user-friendly
                    features like real-time messaging and geolocation for
                    seamless navigation, ensuring a smooth and engaging user
                    experience.
                  </Text>
                ),
              }}
            />
            <Text
              style={{
                color: ThemeColor.primary,
                fontWeight: 400,
                paddingLeft: 25,
                marginTop: 20,
                cursor: "pointer",
              }}
              tag="header"
            >
              Download Full Résumé
            </Text>
          </ExperienceContainer>
          <ProjectContainer>
            <ProjectItem
              data={{
                name: "Treehouse Community Website",
                imgSrc: treehouse,
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
                    connecting families, healthcare providers, and practices in
                    a unified digital space.
                  </Text>
                ),
              }}
            />
            <ProjectItem
              data={{
                name: "Ottawa Grassroots App",
                imgSrc: ogf,
                techstack: [
                  "JavaScript",
                  "React Native",
                  "Expo",
                  "Google Firebase",
                ],
                renderDescription: () => (
                  <Text tag={"body"}>
                    An app created to enhance event discovery and artist
                    engagement for the Ottawa Grassroots Festival with
                    accessibility in mind.
                  </Text>
                ),
              }}
            />
            <ProjectItem
              data={{
                name: "Smart Tenant App",
                imgSrc: smartTenant,
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
                    An app developed to connect tenants with their local
                    communities, fostering better communication and engagement.
                    Includes features such as real-time messaging and a
                    user-friendly interface to help tenants navigate their
                    surroundings and stay informed.
                  </Text>
                ),
              }}
            />
            <ProjectItem
              data={{
                name: "POPTikR App",
                imgSrc: poptikr,
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
                    An app designed to help users discover local deals on goods
                    and services, promoting community-based shopping and
                    exploration. Focused on creating an engaging user experience
                    by integrating features such as real-time updates and
                    geolocation for seamless navigation.
                  </Text>
                ),
              }}
            />
          </ProjectContainer>
        </ScrollableContainer>
      </AppContainer>
    </GlobalContainer>
  );
}

export default App;
// import React from "react";
// import styled from "styled-components";
// import SplineBackground from "./components/SplineBackground/SplineBackground";

// // Wrapper for main content
// const ContentWrapper = styled.div`
//   position: relative;
//   z-index: 1; /* Layer content above the Spline background */
//   pointer-events: none; /* Pass pointer events to the Spline background by default */

//   background-color: red;
// `;

// const InteractiveContent = styled.div`
//   pointer-events: auto; /* Restore pointer events for interactive elements */
//   padding: 40px;
//   color: white;
//   font-family: Arial, sans-serif;
//   text-align: center;
// `;

// const App: React.FC = () => {
//   return (
//     <>

//       <ContentWrapper>
//         <InteractiveContent>
//           <h1>Interactive Spline Background</h1>
//           <p>
//             The Spline background "Follow cursor" effect will work even when
//             hovering over this content.
//           </p>
//           <button>Click Me</button>
//         </InteractiveContent>
//       </ContentWrapper>
//     </>
//   );
// };

// export default App;
