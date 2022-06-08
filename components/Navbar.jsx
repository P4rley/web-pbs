import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [click, setClick] = useState();

  const handleClick = () => {
    setClick(!click);
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Container scrollNav={scrollNav}>
      <Wrapper>
        <Link href="/">
          <Logo>PT PBS</Logo>
        </Link>

        <LinkWrapper>
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/about">About us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/product">Product</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/logistic">Logistics</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/contact">Contact</Link>
          </LinkItem>
        </LinkWrapper>

        <Number>+62 812 3456 2333</Number>
        <MenuWrapper click={click} onClick={handleClick}>
          <Menu click={click}>
            <div></div>
            <div></div>
            <div></div>
          </Menu>
        </MenuWrapper>
      </Wrapper>
      <NavbarMenu click={click} handleClick={handleClick} />
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  width: 100%;
  padding: ${({ scrollNav }) => (scrollNav ? "1.5rem 10%" : "2rem 10%")};
  position: fixed;
  top: 0;
  z-index: ${(props) => props.theme.index5};
  transition: all 0.7s ease-in-out;
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(255, 255, 255, 0.4)" : "transparent"};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 8px 32px 0 rgb(255, 255, 255)" : "unset"};
  backdrop-filter: ${({ scrollNav }) => (scrollNav ? "blur(4px)" : "unset")};
  -webkit-backdrop-filter: ${({ scrollNav }) =>
    scrollNav ? "blur(4px)" : "unset"};
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h3`
  cursor: pointer;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontlg};
`;
const LinkWrapper = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const LinkItem = styled.li`
  font-size: ${(props) => props.theme.fontxs};
  margin: 0 0.5rem;
  transition: all 0.4s ease-in-out;

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontlg};
  }

  &:hover {
    color: #6f6f6f;
  }
`;
const Number = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: ${(props) => props.theme.fontxs};
    border: 1px solid #000;
    padding: 1rem 1.5rem;
    border-radius: 40px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Menu = styled.div`
  display: flex;
  transition: all 0.4s ease-in-out;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  div {
    width: 30px;
    height: 3px;
    border-radius: 20px;
    background-color: ${({ click }) => (click ? "#fff" : "#000")};
    margin: 3px;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ click }) =>
        click ? "rotate(45deg) translate(-1.5px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      width: 20px;
      opacity: ${({ click }) => (click ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ click }) =>
        click ? "rotate(-45deg) translate(-1.5px)" : "rotate(0)"};
    }
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  right: 10%;
  z-index: ${(props) => props.theme.index5};
  width: 60px;
  height: 60px;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover ${Menu} div:nth-child(2) {
    width: 30px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
