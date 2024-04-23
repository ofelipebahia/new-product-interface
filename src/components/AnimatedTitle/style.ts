import styled from 'styled-components';
import { breakpoints } from '../../hooks/useScreenWidth';

export const H2 = styled.h2`
  font-size: 28px;
  margin-bottom: 16px;
  font-weight: light;
  letter-spacing: 0.1em;
  margin-left: 2px;

  ${breakpoints.greaterThan.tablet} {
    font-size: 40px;
    padding-bottom: 32px;
  }
`;
