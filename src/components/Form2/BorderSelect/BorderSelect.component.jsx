import ErrorMessage from 'components/Error/ErrorMessage2.component';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { Container, Icon, Select, SelectHeader, StyledSelect } from './BorderSelect.style';

const BorderSelect = ({ header, name, label, required, icon, options, margin, readOnly, cy }) => {
  const {
    register,
    formState: { errors = {} },
  } = useFormContext();
  return (
    <Container margin={margin}>
      <SelectHeader>{header}</SelectHeader>
      <Select>
        <StyledSelect
          data-cy={cy}
          label={label}
          placeholder={label}
          {...(register ? register(name, required) : {})}
          indent={icon ? '30px' : '0'}
          disabled={readOnly}
        >
          {label ? <option value="">{label}</option> : null}
          {options.map((option) => (
            <option
              selected={option.selected}
              value={typeof option !== 'string' ? option.value : option}
              key={typeof option !== 'string' ? option.value : option}
            >
              {typeof option !== 'string' ? option.text : option}
            </option>
          ))}
        </StyledSelect>
        {icon ? <Icon>{icon}</Icon> : null}
      </Select>
      <ErrorMessage errors={errors} name={name} />
    </Container>
  );
};

BorderSelect.defaultProps = {
  header: '',
  name: '',
  label: '',
  icon: undefined,
  register: undefined,
  required: undefined,
  error: undefined,
  margin: undefined,
  validationLabel: undefined,
  readOnly: false,
  cy: undefined,
};

BorderSelect.propTypes = {
  // Select field header
  header: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
  readOnly: PropTypes.bool,
  // react-hook-form validation object
  register: PropTypes.func,
  required: PropTypes.object,
  // error object
  error: PropTypes.object,
  options: PropTypes.array.isRequired,
  margin: PropTypes.string,
  // specify type of Select expected below Select field
  validationLabel: PropTypes.string,
  cy: PropTypes.string,
};

export default BorderSelect;
