import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLOR_DATA_RED, COLOR_GREY2 } from '../../../common/styles/Colors';

export const Container = styled.div`
  margin: 0;
  display: inline-block;
`;

export const ChipsHolder = styled.div`
  margin: 0;
`;

export const Chip = styled(motion.div)`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : '24px')};
  border-radius: ${(props) => props.borderRadius || '50px'};
  background-color: ${(props) => props.backgroundColor || COLOR_GREY2};
  outline: ${(props) => props.outline || 'none'};
  padding: ${(props) => props.padding || '7px 125px'};
  display: inline-flex;
  margin: 5px;
  color: white;
  align-items: center;
  &:first-child {
    margin-left: 0;
  }
`;

export const ChipText = styled.span`
  color: ${(props) => props.color};
  margin: ${(props) => props.textMargin || '0'};
  font-size: 12px;
  font-weight: ${(props) => props.fontWeight || 'normal'};
`;

export const Icon = styled.i`
  color: ${(props) => (props.IconColor ? props.IconColor : '')};
  font-weight: inherit;
  margin-right: 10px;
  font-size: 16px;
  width: 16px;
  height: 16px;
`;

export const CloseIcon = styled.button`
  border: none;
  height: 18px;
  padding-left: 10px;
  padding-right: 0px;
  color: #909090;
  font-weight: bold;
  float: right;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: ${COLOR_DATA_RED};
  }
`;
