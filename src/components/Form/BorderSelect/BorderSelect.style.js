import styled from 'styled-components';
import { COLOR_PRIMARY_INPUT_UNDERLINE } from '../../../common/styles/Colors';

export const StyledSelect = styled.select`
  height: 40px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${COLOR_PRIMARY_INPUT_UNDERLINE};
  border-radius: 4px;
  color: #63636d;
  font-size: 16px;
  text-indent: ${(props) => (props.indent ? props.indent : '0')};
`;

export const SelectHeader = styled.div`
  margin-bottom: 10px;
  color: #63636d;
  font-size: 12px;
  font-weight: 400;
`;

export const Container = styled.div`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: 100%;
`;

export const Icon = styled.span`
  position: absolute;
  left: 10px;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Validation = styled.div`
  width: 100%;
  color: grey;
  font-size: 12px;
  line-height: auto;
  margin: 0;
  padding-left: 5px;
  margin-bottom: 1%;
  overflow: visible;
  white-space: wrap;
`;
