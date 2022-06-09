import Image from "next/image";
import styled from "styled-components";
import Contacts from "../../components/Contacts";

// Image
import img from "../../public/assets/potato.jpg";

const tomato = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Potato</Heading>
        <ContentWrapper>
          <Content>
            <Title>Exporting high quality potato</Title>
            <Data>
              <Left>
                <Img>
                  <Image src={img} layout="fill" objectFit="cover" alt="" />
                </Img>
              </Left>
              <Right>
                <Desc>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloribus officiis illum culpa odio error? Officia error
                  perferendis eligendi optio eos aliquid, harum quis magni culpa
                  cum, magnam officiis unde quos? Maxime voluptate laboriosam
                  ullam! Suscipit vitae iusto magni tempora temporibus, vero ut?
                  Atque et cupiditate voluptas rem aliquam iure tenetur.
                </Desc>
              </Right>
            </Data>
          </Content>

          <Content>
            <Title>Exporting high quality tomato</Title>

            <Data2>
              <Left2>
                <Img>
                  <Image src={img} layout="fill" objectFit="cover" alt="" />
                </Img>
              </Left2>
              <Right2>
                <Desc>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloribus officiis illum culpa odio error? Officia error
                  perferendis eligendi optio eos aliquid, harum quis magni culpa
                  cum, magnam officiis unde quos? Maxime voluptate laboriosam
                  ullam! Suscipit vitae iusto magni tempora temporibus, vero ut?
                  Atque et cupiditate voluptas rem aliquam iure tenetur.
                </Desc>
              </Right2>
            </Data2>
          </Content>
        </ContentWrapper>
        <Contacts />
      </Wrapper>
    </Container>
  );
};
export default tomato;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 5%;

  @media screen and (min-width: 425px) {
    padding: 0 10%;
  }
`;
const Wrapper = styled.div``;
const Heading = styled.h1`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontxl};
`;
const ContentWrapper = styled.div``;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1.5rem 0;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
`;
const Data = styled.div`
  margin: 2rem 0;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Data2 = styled(Data)`
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1024px) {
    flex: none;
  }
`;
const Left2 = styled(Left)`
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;
const Img = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Desc = styled.p`
  color: #454545;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxs};

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Right = styled.div`
  flex: 1;
  margin: 1.5rem 0;
  @media screen and (min-width: 1024px) {
    flex: none;
    width: 400px;
    margin: 0 3rem;
  }
`;
const Right2 = styled(Right)``;
