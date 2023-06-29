import PropTypes from 'prop-types';

// import styling of the component:
import { useFormContext } from 'react-hook-form';
import ErrorMessage from 'components/Error/ErrorMessage2.component';
import { Container, StyledInput, Icon, InputHeader } from './BorderInput.style';

const BorderInput = ({
  name,
  label,
  required,
  icon,
  type,
  value,
  customStyle,
  stateValue,
  inputStyle,
  fontColor,
  backgroundColor,
  labelAbove,
  disabled,
  placeholder,
  step,
  min,
  max,
  id,
  cy,
  main,
}) => {
  const {
    register,
    formState: { errors = {} },
  } = useFormContext();

  return (
    <Container main={main} {...customStyle} labelAbove={labelAbove}>
      {labelAbove && <InputHeader>{label}</InputHeader>}
      <Container backgroundColor={backgroundColor} {...customStyle}>
        <StyledInput
          id={id}
          label={label}
          placeholder={placeholder || label}
          type={type}
          step={step}
          min={min}
          max={max}
          defaultValue={!stateValue ? value : undefined}
          {...(register ? register(name, required) : {})}
          value={stateValue ? value : undefined}
          style={inputStyle}
          fontColor={fontColor}
          disabled={disabled}
          data-cy={cy}
        />
        <Icon>{icon}</Icon>
      </Container>
      <ErrorMessage errors={errors} name={name} />
    </Container>
  );
};

BorderInput.defaultProps = {
  required: {},
  icon: undefined,
  error: null,
  customStyle: {},
  value: '',
  stateValue: false,
  inputStyle: undefined,
  fontColor: undefined,
  backgroundColor: undefined,
  label: '',
  labelAbove: false,
  disabled: false,
  placeholder: undefined,
  step: undefined,
  max: undefined,
  min: undefined,
  id: undefined,
  cy: undefined,
  main: true,
};

BorderInput.propTypes = {
  name: PropTypes.string.isRequired,
  labelAbove: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.object,
  icon: PropTypes.element,
  type: PropTypes.string.isRequired,
  error: PropTypes.object,
  customStyle: PropTypes.object,
  value: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  stateValue: PropTypes.bool,
  inputStyle: PropTypes.object,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  step: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  id: PropTypes.string,
  cy: PropTypes.string,
  main: PropTypes.bool,
};

export default BorderInput;
