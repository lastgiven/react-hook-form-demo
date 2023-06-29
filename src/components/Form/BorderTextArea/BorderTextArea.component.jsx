/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

// import styling of the component:
import { Container, StyledTextArea, Icon, InputHeader } from './BorderTextArea.style';

const BorderTextArea = ({
  name,
  label,
  register,
  required,
  icon,
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
  rows,
  cy,
}) => (
  <Container main {...customStyle} labelAbove={labelAbove}>
    {labelAbove && <InputHeader>{label}</InputHeader>}
    <Container {...customStyle}>
      <StyledTextArea
        data-cy={cy}
        label={label}
        placeholder={label}
        defaultValue={!stateValue ? value : undefined}
        onChange={onChange}
        {...(register ? register(name, required) : {})}
        onInput={onInput}
        value={stateValue ? value : undefined}
        style={inputStyle}
        fontColor={fontColor}
        disabled={disabled}
        rows={rows}
      />
      {icon && <Icon>{icon}</Icon>}
    </Container>
    <div style={{ alignSelf: 'flex-start' }}>{error}</div>
  </Container>
);

BorderTextArea.defaultProps = {
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
  labelAbove: false,
  disabled: false,
  rows: 2,
  cy: undefined,
};

BorderTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  labelAbove: PropTypes.bool,
  label: PropTypes.string.isRequired,
  register: PropTypes.func,
  required: PropTypes.object,
  icon: PropTypes.element,
  error: PropTypes.object,
  customStyle: PropTypes.object,
  value: PropTypes.string,
  fontColor: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  stateValue: PropTypes.bool,
  inputStyle: PropTypes.object,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  cy: PropTypes.string,
};

export default BorderTextArea;
