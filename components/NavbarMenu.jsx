import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavbarMenu = ({ click, handleClick }) => {
  const [click2, setClick2] = useState(false);

  const handleClick2 = () => {
    setClick2(!click2);
  };

  return (
    <Container click={click}>
      <Wrapper>
        <LinkWrapper>
          <Link href="/">
            <LinkItem onClick={handleClick}> Home</LinkItem>
          </Link>
          <Link href="/about">
            <LinkItem onClick={handleClick}>About us</LinkItem>
          </Link>
          <>
            <ProductWrapper click2={click2}>
              <ProductLinkWrapper click2={click2}>
                <Link href="/product">
                  <LinkItem onClick={handleClick}>Product</LinkItem>
                </Link>
                <Expand click2={click2} onClick={handleClick2}>
                  +
                </Expand>
              </ProductLinkWrapper>
              <ProductDataWrapper click2={click2}>
                <Link href="/product/tomato">
                  <ProductData
                    onClick={() => {
                      handleClick();
                      handleClick2();
                    }}
                  >
                    Tomato
                  </ProductData>
                </Link>
                <Link href="/product/carrot">
                  <ProductData
                    onClick={() => {
                      handleClick();
                      handleClick2();
                    }}
                  >
                    Carrot
                  </ProductData>
                </Link>
                <Link href="/product/garlic">
                  <ProductData
                    onClick={() => {
                      handleClick();
                      handleClick2();
                    }}
                  >
                    Garlic
                  </ProductData>
                </Link>
                <Link href="/product/potato">
                  <ProductData
                    onClick={() => {
                      handleClick();
                      handleClick2();
                    }}
                  >
                    Potato
                  </ProductData>
                </Link>
              </ProductDataWrapper>
            </ProductWrapper>
          </>
          <Link href="/logistics">
            <LinkItem onClick={handleClick}>Logistics</LinkItem>
          </Link>
          <Link href="/contact">
            <LinkItem onClick={handleClick}>Contact</LinkItem>
          </Link>
        </LinkWrapper>
        <Number>+62 812 3456 2333</Number>
      </Wrapper>
    </Container>
  );
};
export default NavbarMenu;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  transform: ${({ click }) =>
    click ? "translate(0,0)" : "translate(calc(100% + 10vw),0)"};
  overflow: hidden;
  background-color: #000;
  transition: transform 1s cubic-bezier(0.7, 0, 0.2, 1);
  padding: 7rem 10%;
  z-index: 1;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LinkWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const LinkItem = styled.a`
  font-size: ${(props) => props.theme.fontlg};
  margin: 1rem 0;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #999999;
  }
`;
const ProductWrapper = styled.div`
  width: 100%;
  height: ${({ click2 }) => (click2 ? "241px" : "55.09px")};
  display: flex;
  flex-direction: column;
  transition: all 0.8s cubic-bezier(0.7, 0, 0.2, 1);
  overflow: hidden;
`;
const ProductLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Expand = styled.div`
  padding-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fontlg};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  color: #fff;

  &:hover {
    transform: rotate(45deg);
  }
`;
const ProductDataWrapper = styled.div`
  margin: 1rem;
`;
const ProductData = styled.p`
  margin: 1rem 0;
  cursor: pointer;
  color: #fff;
`;
const Number = styled.p`
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border: 1px solid #fff;
  border-radius: 40px;
  transition: all 0.4s ease-in-out;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
