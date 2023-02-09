import React from 'react';
import PropTypes from 'prop-types';
import { GlobalContainer, InputContainer, RightLabel, LeftLabel, Slider, Input } from './ToggleSwitch.style';

const ToggleSwitch = ({
  disabled,
  register,
  required,
  translate,
  checked,
  name,
  onChange,
  onClick,
  labelRight,
  labelLeft,
  margin,
  cy,
}) => {
  return (
    <GlobalContainer margin={margin}>
      <LeftLabel toggled={checked}>{labelLeft}</LeftLabel>
      <InputContainer data-cy={cy}>
        <Input
          type="checkbox"
          name={name}
          checked={checked}
          {...(register ? register(name, required) : {})}
          disabled={disabled}
          translate={translate}
          onClick={onClick}
          onChange={onChange}
        />
        <Slider />
      </InputContainer>
      <RightLabel toggled={checked}>{labelRight}</RightLabel>
    </GlobalContainer>
  );
};

ToggleSwitch.defaultProps = {
  translate: '54',
  disabled: false,
  labelLeft: 'On',
  labelRight: 'Off',
  register: undefined,
  required: {},
  onChange: undefined,
  onClick: undefined,
  margin: '0px 10px 0px 0px',
  cy: undefined,
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  translate: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  labelRight: PropTypes.string,
  labelLeft: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.any,
  margin: PropTypes.string,
  cy: PropTypes.string,
};

export default ToggleSwitch;
