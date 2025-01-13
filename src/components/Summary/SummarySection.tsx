import styled from "styled-components";
import Text from "../Text";
import { ThemeColor } from "../../consts/ThemeValues";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 25px;

  gap: 20px;
`;

const BoldAnchor = styled.a`
  font-weight: 700;
  color: ${ThemeColor.primary};
  text-decoration: none;
`;

const SummarySection = () => {
  return (
    <SummaryContainer>
      <Text style={{ fontWeight: 300 }} tag={"header"}>
        I’m a software developer with a passion for transforming beautifully
        crafted designs into interactive, intuitive, and responsive user
        interfaces.
      </Text>
      <Text style={{ fontWeight: 300 }} tag={"header"}>
        Over the past three years, I’ve had the pleasure to work with innovative
        start-ups like{" "}
        <BoldAnchor target="_blank" href="https://beta.treehousecommunity.ca/">
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
        , where I contributed to developing scalable, secure, and user-friendly
        web and mobile applications.
      </Text>
      <Text style={{ fontWeight: 300 }} tag={"header"}>
        In my free time, I love exploring my creativity through learning new
        musical instruments and making music, while also staying active with
        climbing and working out.
      </Text>
    </SummaryContainer>
  );
};

export default SummarySection;
