import Image from "next/image";
import styled from "styled-components";
import Contact from "../components/Contact";

// Image
import img from "../public/assets/tomato.jpg";
import AboutSection from "../sections/AboutSection";

const about = () => {
  return (
    <Container>
      <Wrapper>
        <Header>About us</Header>
        <AboutWrapper>
          <Left>
            <LeftHeading>About us</LeftHeading>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              dolor molestiae laudantium deleniti odio repudiandae quod enim
              unde, vero sed quos, mollitia rem facere atque ad officiis ipsum
              facilis excepturi assumenda maiores quasi eaque saepe modi. Minus
              dolorum excepturi soluta tenetur id recusandae, quibusdam
              temporibus laborum ducimus exercitationem voluptatum repudiandae.
            </Desc>

            <LeftHeading>What we deliver</LeftHeading>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quod ducimus impedit nisi tempora non quidem quae doloribus
              tempore libero.
            </Desc>
          </Left>
          <Right>
            <RightImage>
              <Image src={img} layout="fill" objectFit="cover" alt="" />
            </RightImage>
          </Right>
        </AboutWrapper>
      </Wrapper>
      <AboutSection />
      <Contact />
    </Container>
  );
};
export default about;

const Container = styled.section`
  padding: 0 5%;

  @media screen and (min-width: 768px) {
    padding: 0 10%;
  }
`;
const Wrapper = styled.div``;
const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;
const AboutWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const Left = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
    padding-right: 2rem;
  }
`;
const LeftHeading = styled.h1``;
const Desc = styled.p`
  margin: 1rem 0;
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 300;
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Right = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
const RightImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;
