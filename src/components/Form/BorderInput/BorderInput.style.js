import styled from 'styled-components';
import { COLOR_PRIMARY_INPUT_FONT, COLOR_PRIMARY_INPUT_UNDERLINE } from '../../../common/styles/Colors';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: none;
  box-shadow: none;
  padding: 10px 8px 10px;
  outline: none;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: white;
`;

export const InputHeader = styled.div`
  margin-bottom: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  align-self: flex-start;
`;

const getWidth = (props) => {
  if (props.width) return props.width;
  return '100%';
};

const getMargin = (props) => {
  if (!props.labelAbove && props.main) return '0 0 20px 0';
  if (props.margin) return props.margin;
  return '0';
};

export const Container = styled.div`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  width: ${getWidth};
  margin: ${getMargin};
  display: flex;
  flex-direction: ${(props) => (props.main ? 'column' : 'row')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: center;
  border: ${(props) => (props.main ? 'none' : `1px solid ${COLOR_PRIMARY_INPUT_UNDERLINE}`)};
  font-size: 17px;
  align-items: center;
  border-radius: 4px;
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
  margin-right: 5px;
`;
