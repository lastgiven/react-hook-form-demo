import styled from 'styled-components';
import { COLOR_PRIMARY_CHECKBOX, COLOR_PRIMARY_CHECKBOX_HOVER } from '../../../common/styles/Colors';

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : 'normal')};
  text-overflow: ${(props) => (props.textOverflow ? props.textOverflow : 'initial')};
  overflow: ${(props) => (props.overflow ? props.overflow : 'initial')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: ${(props) => (props.width ? props.width : '50%')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: ${(props) => (props.color ? props.color : 'inherit')};
  &:hover {
    input ~ .checkMark {
      background-color: ${(props) => (props.hoverColor ? props.hoverColor : COLOR_PRIMARY_CHECKBOX_HOVER)};
      &:after {
        opacity: 0.3;
      }
    }
  }
`;

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0px;
  width: 0px;
  &:checked ~ .checkMark {
    background-color: ${(props) => (props.checkedColor ? props.checkedColor : COLOR_PRIMARY_CHECKBOX)} !important;
    &:after {
      opacity: 1 !important;
    }
  }
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 1.5px;
  left: 0;
  height: 18px;
  width: 18px;
  border: 1px solid ${COLOR_PRIMARY_CHECKBOX};
  border-radius: 4px;
  transition: background-color 0.1s ease-in-out;
  &:after {
    left: 5px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: '';
    opacity: 0;
    position: absolute;
    transition: opacity 0.1s ease-in-out;
  }
`;
