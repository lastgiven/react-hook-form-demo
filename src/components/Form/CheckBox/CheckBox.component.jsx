import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, CheckBox, CheckMark } from './CheckBox.style';

const Div = styled.div``;

const Checkbox = ({
  style,
  width,
  margin,
  label,
  defaultChecked,
  register,
  required,
  name,
  error,
  color,
  checked,
  checkedColor,
  hoverColor,
  cy,
  onClick,
  onChange,
  disabled,
}) => {
  return (
    <Container style={style} width={width} margin={margin} color={color} hoverColor={hoverColor} data-cy={cy}>
      {label}
      <CheckBox
        type="checkbox"
        onClick={onClick}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        defaultChecked={defaultChecked}
        checkedColor={checkedColor}
        {...(register ? register(name, required) : {})}
      />
      <CheckMark className="checkMark" />
      <Div>{error}</Div>
    </Container>
  );
};

Checkbox.defaultProps = {
  style: undefined,
  name: '',
  width: '',
  margin: '',
  checked: undefined,
  disabled: undefined,
  defaultChecked: undefined,
  register: undefined,
  required: {},
  error: undefined,
  color: undefined,
  checkedColor: undefined,
  hoverColor: undefined,
  cy: undefined,
  onClick: undefined,
  onChange: undefined,
};

Checkbox.propTypes = {
  style: PropTypes.object,
  width: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  checkedColor: PropTypes.string,
  hoverColor: PropTypes.string,
  margin: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  defaultChecked: PropTypes.bool,
  register: PropTypes.func,
  required: PropTypes.any,
  name: PropTypes.string,
  error: PropTypes.object,
  cy: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Checkbox;
