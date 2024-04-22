import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
`;

export const DesktopMenu = styled.div``;

export const MenuItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto;
  padding: 16px;
  align-items: center;
  border-radius: 4px;
  margin: 4px;
  transition: all 0.2s ease-in-out;

  ${props =>
    props.selected &&
    css`
      background-color: #f6f6f6;
    `}

  &:hover {
    background-color: #f6f6f6;
  }

  > p {
    margin: 0;
    padding-left: 8px;
    font-weight: 600;
  }
`;

export const ContentContainer = styled.div`
  > img {
    height: 90%;
    border-radius: 8px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 530px;
  height: 530px;
  padding: 8px;
`;
