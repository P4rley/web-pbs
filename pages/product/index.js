import styled from "styled-components";
import Contacts from "../../components/Contacts";

// Image
import img from "../../public/assets/tomato.jpg";
import img2 from "../../public/assets/carrot.jpg";
import img3 from "../../public/assets/garlic.jpg";
import img4 from "../../public/assets/potato.jpg";
import img5 from "../../public/assets/person.jpg";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Our Product</Heading>

        <BoxWrapper>
          <Box>
            <Title>Tomato</Title>
            <Line />
            <BoxContent>
              <BoxImgWrapper>
                <BoxImg>
                  <Image src={img} layout="fill" objectFit="cover" alt="" />
                </BoxImg>
              </BoxImgWrapper>
              <DescWrapper>
                <Desc>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt, dignissimos? A sit possimus recusandae unde magnam
                  odit cumque mollitia distinctio?
                </Desc>
                <Link href="/product/tomato">
                  <Button>More information</Button>
                </Link>
              </DescWrapper>
            </BoxContent>
          </Box>

          <Box>
            <Title>Carrot</Title>
            <Line />
            <BoxContent>
              <BoxImgWrapper>
                <BoxImg>
                  <Image src={img2} layout="fill" objectFit="cover" alt="" />
                </BoxImg>
              </BoxImgWrapper>
              <DescWrapper>
                <Desc>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt, dignissimos? A sit possimus recusandae unde magnam
                  odit cumque mollitia distinctio?
                </Desc>
                <Link href="/product/carrot">
                  <Button>More information</Button>
                </Link>
              </DescWrapper>
            </BoxContent>
          </Box>

          <Box>
            <Title>Garlic</Title>
            <Line />
            <BoxContent>
              <BoxImgWrapper>
                <BoxImg>
                  <Image src={img3} layout="fill" objectFit="cover" alt="" />
                </BoxImg>
              </BoxImgWrapper>
              <DescWrapper>
                <Desc>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt, dignissimos? A sit possimus recusandae unde magnam
                  odit cumque mollitia distinctio?
                </Desc>
                <Link href="/product/garlic">
                  <Button>More information</Button>
                </Link>
              </DescWrapper>
            </BoxContent>
          </Box>

          <Box>
            <Title>Potato</Title>
            <Line />
            <BoxContent>
              <BoxImgWrapper>
                <BoxImg>
                  <Image src={img4} layout="fill" objectFit="cover" alt="" />
                </BoxImg>
              </BoxImgWrapper>
              <DescWrapper>
                <Desc>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt, dignissimos? A sit possimus recusandae unde magnam
                  odit cumque mollitia distinctio?
                </Desc>
                <Link href="/product/potato">
                  <Button>More information</Button>
                </Link>
              </DescWrapper>
            </BoxContent>
          </Box>
        </BoxWrapper>
      </Wrapper>
      <Contacts />
    </Container>
  );
};
export default index;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 10%;
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
const BoxWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;
const Box = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;

  @media screen and (min-width: 768px) {
    width: 290px;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
    margin: 1.5rem 1rem;
  }
`;
const Title = styled.h1``;
const Line = styled.div`
  background-color: #dedede;
  width: 100%;
  height: 1px;
  margin-top: 0.5rem;
`;
const BoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BoxImgWrapper = styled.div`
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem 0;
`;
const BoxImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const DescWrapper = styled.div``;
const Desc = styled.p`
  text-align: left;
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 300;
`;
const Button = styled.button`
  border: 1px solid #000;
  outline: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 40px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
