/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

// import styling of the component:
import { Container, StyledInput, Icon } from './LineInput.style';

const LineInput = ({
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
  stateValue,
  inputStyle,
}) => {
  return (
    <Container main {...customStyle}>
      <Container {...customStyle}>
        <StyledInput
          label={label}
          placeholder={label}
          type={type}
          defaultValue={!stateValue ? value : undefined}
          onChange={onChange}
          {...(register ? register(name, required) : {})}
          value={stateValue ? value : undefined}
          style={inputStyle}
        />
        <Icon>{icon}</Icon>
      </Container>
      <div style={{ alignSelf: 'flex-start' }}>{error}</div>
    </Container>
  );
};

LineInput.defaultProps = {
  register: undefined,
  required: {},
  icon: undefined,
  error: null,
  customStyle: {},
  value: '',
  onChange: undefined,
  stateValue: false,
  inputStyle: undefined,
};

LineInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func,
  required: PropTypes.object,
  icon: PropTypes.element,
  type: PropTypes.string.isRequired,
  error: PropTypes.object,
  customStyle: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  stateValue: PropTypes.bool,
  inputStyle: PropTypes.object,
};

export default LineInput;
