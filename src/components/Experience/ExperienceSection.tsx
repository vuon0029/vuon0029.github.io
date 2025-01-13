import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import Text from "../Text";
import { ThemeColor, ThemeSize } from "../../consts/ThemeValues";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const BoldSpan = styled.span`
  font-weight: 700;
  color: ${ThemeColor.primary};
`;

const ExperienceSection = () => {
  return (
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
              practices. Collaborated with a cross-functional team to design and
              implement new features, enhancing the user experience for families
              and healthcare providers.
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
              Led the development of <BoldSpan>Smart Tenant</BoldSpan>, a mobile
              app connecting tenants with their local community. Played a key
              role in developing <BoldSpan>POPTikR</BoldSpan>, a mobile app that
              enables users to discover local deals on goods and services.
              Focused on building user-friendly features like real-time
              messaging and geolocation for seamless navigation, ensuring a
              smooth and engaging user experience.
            </Text>
          ),
        }}
      />

      <a
        style={{
          color: ThemeColor.primary,
          fontWeight: 400,
          paddingLeft: 25,
          marginTop: 20,
          textDecoration: "none",
          fontSize: ThemeSize.header.fontSize,
        }}
        target="_blank"
        href="/KietVuong_DeveloperResume.pdf"
      >
        Download Full Résumé
      </a>
    </ExperienceContainer>
  );
};

export default ExperienceSection;
