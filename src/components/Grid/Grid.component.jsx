import styled from 'styled-components';
import { Row as RowGrid, Col as ColGrid, Container as ContainerGrid } from 'react-grid-system';

export const Container = styled(ContainerGrid)`
  padding-top: 15px;
  max-width: 100% !important;
`;

export const Row = styled(RowGrid)`
  margin-bottom: ${(props) => (props.bottomMargin ? props.bottomMargin : '30px')};
`;

export const Col = styled(ColGrid)``;

export const StyledCol = styled(Col)`
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'unset')};
`;
