import styled from 'styled-components';
import { COLOR_PRIMARY_INPUT_FONT, COLOR_PRIMARY_INPUT_UNDERLINE } from '../../../common/styles/Colors';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: none;
  box-shadow: none;
  padding: 16px 8px 16px;
  outline: none;
  background-color: transparent;
  font-size: 17px;
  font-family: 'Open Sans', sans-serif;
`;

const getWidth = (props) => {
  if (props.width) return props.width;
  if (props.main) return '50%';
  return '100%';
};

const getMargin = (props) => {
  if (props.main) return '0 0 20px 0';
  if (props.margin) return props.margin;
  return '0';
};

export const Container = styled.div`
  width: ${getWidth};
  margin: ${getMargin};
  display: flex;
  flex-direction: ${(props) => (props.main ? 'column' : 'row')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: center;
  border-bottom: ${(props) => (props.main ? 'none' : `2px solid ${COLOR_PRIMARY_INPUT_UNDERLINE}`)};
  font-size: 17px;
  align-items: center;
  @media (max-width: 900px) {
    width: ${getWidth};
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${COLOR_PRIMARY_INPUT_FONT};
`;
