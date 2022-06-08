import styled from "styled-components";
import Hero from "../sections/Hero";
import Promise from "../sections/Promise";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Promise />
    </Container>
  );
}

const Container = styled.section``;
