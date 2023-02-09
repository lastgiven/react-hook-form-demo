import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../common/styles/Colors';

export const H1 = styled.h1`
  font-size: 26px;
  color: ${COLOR_PRIMARY};
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.541667px;
  line-height: 1.308;
  font-family: 'Open Sans', sans-serif;
`;

export const H2 = styled.h2`
  font-size: 22px;
  letter-spacing: 0px;
  color: ${COLOR_PRIMARY};
  font-weight: 700;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
`;

export const H3 = styled.h3`
  font-size: 17px;
  color: ${COLOR_SECONDARY};
  font-weight: 600;
  margin: 0;
  letter-spacing: 0px;
  font-family: 'Open Sans', sans-serif;
`;

export const H4 = styled.h4`
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : COLOR_PRIMARY)};
  font-weight: 400;
  margin: 0;
  letter-spacing: 0px;
  font-family: 'Open Sans', sans-serif;
`;

export const P = styled.p`
  color: ${(props) => (props.color ? props.color : '')};
`;
export const Span = styled.span`
  color: ${(props) => (props.color ? props.color : '#777')};
`;

export const XMP = styled.pre`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  overflow-x: auto;
  padding: 20px;
  background-color: ${COLOR_PRIMARY};
  border-radius: 4px;
  color: white;
`;

export const Spacer = styled.div`
  height: ${(props) => (props.height ? props.height : '25px')};
  width: 100%;
`;
