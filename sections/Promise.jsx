import Image from "next/image";
import styled from "styled-components";

// Image
import img from "../public/assets/garlic.jpg";

const Promise = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Our Promise</Header>
        <Content>
          <ContentWrapper>
            <Left>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                harum rem vitae iure asperiores voluptas nulla quisquam natus?
                Nobis non ratione, nemo inventore, quidem voluptas magni neque
                blanditiis atque, amet ipsam unde natus labore praesentium
                magnam. Perspiciatis aut totam id!
              </Desc>
            </Left>
            <Right>
              <ContentImg>
                <Image src={img} layout="fill" objectFit="cover" alt="" />
              </ContentImg>
            </Right>
          </ContentWrapper>

          <ContentWrapper>
            <Left>
              <Desc2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                harum rem vitae iure asperiores voluptas nulla quisquam natus?
                Nobis non ratione, nemo inventore, quidem voluptas magni neque
                blanditiis atque, amet ipsam unde natus labore praesentium
                magnam. Perspiciatis aut totam id!
              </Desc2>
            </Left>
            <Right>
              <ContentImg>
                <Image src={img} layout="fill" objectFit="cover" alt="" />
              </ContentImg>
            </Right>
          </ContentWrapper>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Promise;

const Container = styled.div`
  padding: 10% 5%;
  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: 425px) {
    padding: 10%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.h1`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontxl};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;
const ContentWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:nth-child(2) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Desc = styled.p`
  color: #454545;
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 300;

  @media screen and (min-width: 768px) {
    margin-right: 1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Desc2 = styled(Desc)`
  @media screen and (min-width: 768px) {
    margin-left: 1rem;
  }
`;
const ContentImg = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    width: 300px;
    margin: 2rem 0;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 300px;
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;
