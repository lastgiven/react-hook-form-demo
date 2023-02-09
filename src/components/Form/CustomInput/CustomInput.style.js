import styled from 'styled-components';
import { COLOR_PRIMARY_INPUT_FONT, COLOR_SECONDARY } from '../../../common/styles/Colors';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: none;
  box-shadow: none;
  padding: 10px 8px 10px;
  outline: none;
  background-color: transparent;
  font-size: 26px;
  font-family: 'Open Sans', sans-serif;
  color: ${COLOR_SECONDARY};
  font-weight: bold;
  border-bottom: 1px solid ${COLOR_SECONDARY};
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${COLOR_SECONDARY};
    opacity: 0.9; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${COLOR_SECONDARY};
    opacity: 0.9;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${COLOR_SECONDARY};
    opacity: 0.9;
  }
`;

export const InputHeader = styled.div`
  margin-bottom: 10px;
  color: #63636d;
  font-size: 12px;
  font-weight: 400;
  align-self: flex-start;
`;

const getWidth = (props) => {
  if (props.width) return props.width;
  return '100%';
};

const getMargin = (props) => {
  if (props.margin) return props.margin;
  if (!props.labelAbove && props.main) return '0 0 20px 0';
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
  margin-right: 5px;
`;
