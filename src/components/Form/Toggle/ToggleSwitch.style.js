import styled from 'styled-components';
import { COLOR_PRIMARY } from '../../../common/styles/Colors';

export const GlobalContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

export const InputContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 25.5px;
  > input {
    display: none;
  }
`;

export const Input = styled.input`
  &:checked + span {
    background-color: ${COLOR_PRIMARY};
  }
  &:disabled + span {
    background-color: #ccc;
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:disabled:checked + span {
    background-color: ${COLOR_PRIMARY};
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + span:before {
    -webkit-transform: translateX(${({ translate }) => translate}px);
    -ms-transform: translateX(${({ translate }) => translate}px);
    transform: translateX(${({ translate }) => translate}px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 25px;
  &:before {
    box-shadow: 2px 2px 5px #ccc;
    position: relative;
    border-radius: 50%;
    content: '';
    height: 23px;
    width: 24px;
    left: 1px;
    top: -0.6px;
    background-color: #fff;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
`;

export const RightLabel = styled.span`
  display: ${({ toggled }) => (toggled ? 'none' : 'initial')};
  color: #fff;
  font-size: 15px;
  font-family: helvetica;
  padding: 0 10px;
  z-index: 1;
  margin-left: -40px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  &:before {
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
`;

export const LeftLabel = styled.span`
  display: ${({ toggled }) => (toggled ? 'initial' : 'none')};
  color: #fff;
  font-size: 15px;
  font-family: helvetica;
  padding: 0 10px;
  z-index: 1;
  margin-right: -40px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;
