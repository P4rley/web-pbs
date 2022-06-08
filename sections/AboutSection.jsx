import styled from "styled-components";

const AboutSection = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          PT PBS <span>Exporter fresh vegie from Indonesia.</span>
        </Heading>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero fugit
          nihil totam maxime, quis delectus. Expedita eligendi provident animi
          placeat voluptatum labore, iste aliquam! Aperiam illo voluptatibus
          excepturi harum atque ipsa ea veritatis velit autem, minima sequi
          deserunt tempora enim corrupti modi dolor cumque fuga dolores
          provident placeat. Sapiente, dicta.
        </Desc>
      </Wrapper>
    </Container>
  );
};
export default AboutSection;

const Container = styled.div`
  margin: 2rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 0 15%;
  }
`;
const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 400;

  span {
    font-weight: 300;
    font-size: 0.5rem;
  }
`;
const Desc = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontmd};
  margin: 1rem 0;
`;
