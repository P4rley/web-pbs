import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Image
import img from "../public/assets/person.jpg";

const Contact = () => {
  return (
    <Container>
      <Box>
        <BoxContactImg>
          <Image src={img} alt="tomato" layout="fill" objectFit="cover" />
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
    </Container>
  );
};
export default Contact;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 350px;
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
