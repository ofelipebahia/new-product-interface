import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../hooks/useScreenWidth';
import Hamburger from 'hamburger-react';

export const Nav = styled.nav<{ isOpen: boolean }>`
  background-color: ${props => (props.isOpen ? `#000` : `none`)};
  background-image: linear-gradient(
    #fff 65%,
    rgba(255, 255, 255, 0.74) 79%,
    rgba(255, 255, 255, 0.4) 91%,
    rgba(255, 255, 255, 0)
  );
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  ${props =>
    props.isOpen &&
    css`
      background-image: none;
      position: fixed;
      bottom: 0;
      top: 0;
      right: 0;
      left: 0;
      z-index: 999;
      height: 100vh;
      width: 100%;
    `};
`;

export const NavContainer = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-rows: auto;
  margin: 0 auto;
  max-width: 1024px;
  padding: 32px 40px;

  .logo {
    filter: ${props => (props.isOpen ? css`invert(1)` : css`invert(0)`)};
    transition: 0.5s ease-in-out;
  }

  ${props =>
    props.isOpen &&
    css`
      ${breakpoints.greaterThan.tablet} {
        grid-template-rows: 99px auto;
      }
    `}
`;

export const MenuPageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  min-height: 500px;
  background-color: black;
  padding-left: 42px;

  ${breakpoints.greaterThan.tablet} {
    padding-left: 0px;
    display: grid;
    grid-template-columns: 450px auto;
    min-height: 500px;
    background-color: black;
  }
`;

export const PageImages = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-top: 40px;

  ${breakpoints.greaterThan.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ListMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 2rem;
  font-weight: 10;

  padding-top: 40px;
  ${breakpoints.greaterThan.tablet} {
    font-size: 2.5rem;
    padding-top: 0px;
  }
`;

export const ListOption = styled(motion.li)`
  margin: 0;
  padding: 20px;
  padding-left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.21);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    padding-left: 20px;
    box-shadow: inset 0 -110px 5px rgba(255, 255, 255, 0.07);
  }
`;
