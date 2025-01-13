import styled from "styled-components";
import Text from "../Text";
import Footer from "../Footer/Footer";

const HeaderSection = styled.div`
  display: flex;

  flex-direction: column;
`;

const StaticContainer = styled.div`
  display: flex;
  padding: 25px;
  margin-top: 30px;
  flex-direction: column;

  gap: 20px;

  #footer {
    flex-direction: row;
    margin-bottom: 0px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function StaticMobileContainer() {
  return (
    <StaticContainer>
      <HeaderSection>
        <Text tag={"banner"}>Kiet Vuong</Text>
        <div>
          <Text tag={"header"}>Mobile Application Developer</Text>
          <Text tag={"header"}>Front End Developer</Text>
        </div>
      </HeaderSection>
      <Footer />
    </StaticContainer>
  );
}

export default StaticMobileContainer;
