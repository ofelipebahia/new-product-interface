import styled, { css } from 'styled-components';
import { breakpoints } from '../../../hooks/useScreenWidth';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;

  ${breakpoints.greaterThan.tablet} {
    grid-template-columns: 250px auto;
  }
`;

export const DesktopMenu = styled.div``;

export const MenuItem = styled.a.attrs({
  href: '#',
})<{ selected: boolean }>`
  /* remove all a tag styles */
  color: inherit;
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  /* remove any font styling */

  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto;
  padding: 16px;
  align-items: center;
  border-radius: 4px;
  margin: 4px;
  margin-left: 0;
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
    height: 95%;
    width: 100%;
    border-radius: 8px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 530px;
  height: 530px;
  padding-left: 8px;
`;

export const MobileContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 0;

  > img {
    height: 12px;
    height: 90%;
    width: 90%;
    border-radius: 8px;
  }
`;
