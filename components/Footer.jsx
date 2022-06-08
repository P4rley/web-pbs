import Link from "next/link";
import styled from "styled-components";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingWrapper>
          <Logo>PT PBS</Logo>
          <Desc>Exporter fresh veggie from Indonesia</Desc>
        </HeadingWrapper>
        <Address>Medan, Indonesia</Address>
        <SocialWrapper>
          <Link href="/">
            <SocialLink>
              <AiFillInstagram fontSize={16} fontWeight={300} />
            </SocialLink>
          </Link>
          <Link href="/">
            <SocialLink>
              <AiFillFacebook fontSize={16} fontWeight={300} />
            </SocialLink>
          </Link>
          <Link href="/">
            <SocialLink>
              <AiFillMail fontSize={16} fontWeight={300} />
            </SocialLink>
          </Link>
          <Link href="/">
            <SocialLink>
              <AiOutlineTwitter fontSize={16} fontWeight={300} />
            </SocialLink>
          </Link>
        </SocialWrapper>
        <FooterMenu>
          <Line />
          <CopyrightWrapper>
            <Copyright>© PT PBS. Code by Hersa.</Copyright>
            <TermWrapper>
              <Terms>Terms & Condition</Terms>
              <Privacy>Privacy & Policies</Privacy>
            </TermWrapper>
          </CopyrightWrapper>
        </FooterMenu>
      </Wrapper>
    </Container>
  );
};
export default Footer;

const Container = styled.section`
  width: 100%;
  background-color: #000;
  padding: 2rem 10% 1rem;
`;
const Wrapper = styled.div``;
const HeadingWrapper = styled.div`
  margin-bottom: 1rem;
`;
const Logo = styled.h1`
  color: #fff;
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;
const Desc = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxs};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Address = styled.p`
  color: #fff;
  font-weight: 300;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const SocialWrapper = styled.div`
  display: flex;
`;
const SocialLink = styled.div`
  color: #fff;
  margin-right: 0.5rem;
  font-size: ${(props) => props.theme.fontmd};
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #dedede;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #696969;
  margin: 2rem 0 1rem;
`;
const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Copyright = styled.p`
  color: #fff;
  font-size: 0.4rem;
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const TermWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Terms = styled.p`
  font-size: 0.4rem;
  margin: 0 1rem;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const Privacy = styled.p`
  font-size: 0.4rem;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
