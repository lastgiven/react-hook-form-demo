import PropTypes from 'prop-types';

// import styling of the component:
import { Container, StyledInput, Icon, InputHeader } from './CustomInput.style';

const CustomInput = ({
  name,
  label,
  register,
  required,
  icon,
  type,
  error,
  value,
  customStyle,
  onChange,
  onInput,
  stateValue,
  inputStyle,
  fontColor,
  labelAbove,
  disabled,
  placeholder,
  step,
  min,
  id,
  cy,
}) => {
  return (
    <Container main {...customStyle} labelAbove={labelAbove}>
      {labelAbove && <InputHeader>{label}</InputHeader>}
      <StyledInput
        id={id}
        label={label}
        placeholder={placeholder || label}
        type={type}
        step={step}
        min={min}
        data-cy={cy}
        defaultValue={!stateValue ? value : undefined}
        onChange={onChange}
        {...(register ? register(name, required) : {})}
        onInput={onInput}
        value={stateValue ? value : undefined}
        style={inputStyle}
        fontColor={fontColor}
        disabled={disabled}
      />
      <Icon>{icon}</Icon>
      <div style={{ alignSelf: 'flex-start' }}>{error}</div>
    </Container>
  );
};

CustomInput.defaultProps = {
  register: undefined,
  required: {},
  icon: undefined,
  error: null,
  customStyle: {},
  value: '',
  onChange: undefined,
  onInput: undefined,
  stateValue: false,
  inputStyle: undefined,
  fontColor: undefined,
  label: '',
  type: undefined,
  labelAbove: false,
  disabled: false,
  placeholder: undefined,
  step: undefined,
  min: undefined,
  id: undefined,
  cy: undefined,
};

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  labelAbove: PropTypes.bool,
  label: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.object,
  icon: PropTypes.element,
  type: PropTypes.string,
  error: PropTypes.object,
  customStyle: PropTypes.object,
  value: PropTypes.string,
  fontColor: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  stateValue: PropTypes.bool,
  inputStyle: PropTypes.object,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  step: PropTypes.string,
  min: PropTypes.number,
  id: PropTypes.string,
  cy: PropTypes.string,
};

export default CustomInput;
