import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Image
import img from "../public/assets/tomato.jpg";
import img2 from "../public/assets/carrot.jpg";
import img3 from "../public/assets/garlic.jpg";
import img4 from "../public/assets/potato.jpg";
import img5 from "../public/assets/person.jpg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Exporter fresh veggie from Indonesia</Heading>

        <HeroBoxWrapper>
          <Box>
            <BoxImgWrapper>
              <BoxImg>
                <Image
                  src={img}
                  alt="tomato"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </BoxImg>
            </BoxImgWrapper>
            <Title>Tomato</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              excepturi minus placeat doloremque reprehenderit sapiente non
              asperiores recusandae, omnis debitis nihil unde harum ut a fuga
              neque ipsam dolores voluptate.
            </Desc>
            <Link href="/product/tomato">
              <Button>More information</Button>
            </Link>
          </Box>
          <Box>
            <BoxImgWrapper>
              <BoxImg>
                <Image
                  src={img2}
                  alt="carrot"
                  layout="fill"
                  objectFit="cover"
                />
              </BoxImg>
            </BoxImgWrapper>
            <Title>Carrot</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              excepturi minus placeat doloremque reprehenderit sapiente non
              asperiores recusandae, omnis debitis nihil unde harum ut a fuga
              neque ipsam dolores voluptate.
            </Desc>
            <Link href="/product/tomato">
              <Button>More information</Button>
            </Link>
          </Box>
          <Box>
            <BoxImgWrapper>
              <BoxImg>
                <Image
                  src={img3}
                  alt="garlic"
                  layout="fill"
                  objectFit="cover"
                />
              </BoxImg>
            </BoxImgWrapper>
            <Title>Garlic</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              excepturi minus placeat doloremque reprehenderit sapiente non
              asperiores recusandae, omnis debitis nihil unde harum ut a fuga
              neque ipsam dolores voluptate.
            </Desc>
            <Link href="/product/tomato">
              <Button>More information</Button>
            </Link>
          </Box>
          <Box>
            <BoxImgWrapper>
              <BoxImg>
                <Image
                  src={img4}
                  alt="potato"
                  layout="fill"
                  objectFit="cover"
                />
              </BoxImg>
            </BoxImgWrapper>
            <Title>Potatoes</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              excepturi minus placeat doloremque reprehenderit sapiente non
              asperiores recusandae, omnis debitis nihil unde harum ut a fuga
              neque ipsam dolores voluptate.
            </Desc>
            <Link href="/product/tomato">
              <Button>More information</Button>
            </Link>
          </Box>

          <Box>
            <BoxContactImg>
              <Image src={img5} alt="tomato" layout="fill" objectFit="cover" />
            </BoxContactImg>
            <Title>More information?</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
              excepturi.
            </Desc>
            <Link href="/product/tomato">
              <Button>+62 812 9034 9034</Button>
            </Link>
          </Box>
        </HeroBoxWrapper>
      </Wrapper>
    </Container>
  );
};
export default Hero;

const Container = styled.div`
  padding: 0 5%;
  min-height: 100vh;

  @media screen and (min-width: 1024px) {
    padding: 0 10%;
  }
`;
const Wrapper = styled.div``;
const Heading = styled.h1`
  font-weight: 400;
  height: 60vh;
  font-size: ${(props) => props.theme.fontxl};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroBoxWrapper = styled.div`
  @media screen and (min-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const Box = styled.div`
  padding: 1rem;
  margin: 1.5rem 0;
  background-color: #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 425px) {
    width: 400px;
    height: 362px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    margin: 1rem;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }

  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`;
const BoxImgWrapper = styled.div`
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
const BoxImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const BoxContactImg = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;
const Title = styled.h1`
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 1rem 0;
  color: #454545;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxs};
`;
const Button = styled.button`
  border: 1px solid #000;
  outline: none;
  background-color: transparent;
  border-radius: 40px;
  color: #000;
  padding: 0.5rem 1rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
