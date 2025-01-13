import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ThemeColor } from "../../consts/ThemeValues";

const FooterContact = styled.div`
  display: flex;

  flex-direction: row;

  margin-bottom: 50px;

  margin-top: auto;

  gap: 20px;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
`;

function Footer() {
  return (
    <FooterContact>
      <StyledAnchor target="_blank" href="https://github.com/vuon0029">
        <FiGithub color={ThemeColor.primary} size={40} />
      </StyledAnchor>
      <StyledAnchor
        target="_blank"
        href="https://www.linkedin.com/in/vuong-tuan-kiet/"
      >
        <FiLinkedin color={ThemeColor.primary} size={40} />
      </StyledAnchor>
    </FooterContact>
  );
}

export default Footer;
