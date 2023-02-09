import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import styled from 'styled-components';
import { COLOR_PRIMARY_FONT } from '../../../common/styles/Colors';

export const StyledWrapper = styled.div`
  height: fit-content;
  .SingleDatePickerInput__withBorder {
    border: none;
    border-bottom: 0.5px solid #adacb7;
    /* background: unset; */
    margin: 0 !important;
  }
  .DateInput_input {
    height: 47px;
    font-size: 14px;
    font-style: normal;
    :disabled {
      background: #f2f2f2;
    }
    border: none;
    font-size: 15px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    color: ${COLOR_PRIMARY_FONT};
    :disabled {
      background-color: unset !important;
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: #f2f2f2;
    }
  }
  .DateInput__disabled {
    font-style: normal;
    background: unset;
  }
`;

export const InputHeader = styled.label`
  margin-bottom: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  align-self: flex-start;
  margin-top: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px 3px 0;
  justify-content: center;
  height: fit-content;
  margin: 0;
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

export const Label = styled.label`
  color: ${COLOR_PRIMARY_FONT};
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 34px;
  top: -8px;
  transition: 0.2s ease all;
  input:focus ~ &,
  input:not(:placeholder-shown).input:not(:focus) ~ .label,
  input:disabled ~ & {
    top: 10px;
    font-size: 14px;
    color: ${COLOR_PRIMARY_FONT};
  }
`;
