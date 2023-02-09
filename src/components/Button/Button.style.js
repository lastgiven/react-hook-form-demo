import styled from 'styled-components';
import {
  COLOR_BUTTON_DISABLED,
  COLOR_PRIMARY_BUTTON,
  COLOR_PRIMARY_BUTTON_FONT,
  COLOR_SECONDARY_BUTTON,
  COLOR_SECONDARY_BUTTON_FONT,
  COLOR_TERTIARY_BUTTON,
} from '../../common/styles/Colors';

export const StyledPrimaryButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  height: ${(props) => (props.height ? props.height : '48px')};
  width: ${(props) => (props.width ? props.width : '50%')};
  border-radius: 10px;
  padding: ${(props) => (props.padding ? props.padding : '16px 24px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  cursor: pointer;
  color: ${COLOR_PRIMARY_BUTTON_FONT};
  background: ${COLOR_PRIMARY_BUTTON};
  border: none;
  font-size: 16px;
  font-weight: 700;
  margin-top: 15px;
  :disabled {
    background: ${COLOR_BUTTON_DISABLED};
  }

  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  :active {
    background: #04a982;
  }
`;

export const StyledSecondaryButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  height: ${(props) => (props.height ? props.height : '38px')};
  width: ${(props) => (props.width ? props.width : '50%')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  border-radius: 10px;
  padding: 16px 24px;
  cursor: pointer;
  color: #fff;
  background-color: ${COLOR_SECONDARY_BUTTON};
  border: 1px solid #fff;
  font-size: 16px;
  margin-top: 15px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};

  :disabled {
    background: ${COLOR_BUTTON_DISABLED};
  }
`;

export const StyledTertiaryButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  height: ${(props) => (props.height ? props.height : '48px')};
  width: ${(props) => (props.width ? props.width : '50%')};
  border-radius: 3px;
  padding: 8px;
  margin: ${(props) => (props.margin ? props.margin : '0')};
  cursor: pointer;
  color: ${COLOR_TERTIARY_BUTTON};
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 700;
  :disabled {
    background: ${COLOR_BUTTON_DISABLED};
  }
`;

export const StyledQuaternaryButton = styled.button`
  height: ${(props) => (props.height ? props.height : '32px')};
  width: ${(props) => (props.width ? props.width : '140px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  background-color: #242a4d;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  :disabled {
    background: ${COLOR_BUTTON_DISABLED};
  }
`;

export const StyledQuaternaryButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledQuaternaryButtonText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '11px')};
  font-weight: 600;
  letter-spacing: 0.37px;
  line-height: 1.455px;
  color: white;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0')};
`;

export const Icon = styled.i`
  margin-right: 10px;
  font-size: 25px;
  width: 25px;
  height: 25px;
`;
