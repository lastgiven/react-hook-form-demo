/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, SelectHeader, StyledSelect, Icon, Select, Validation } from './BorderSelect.style';

const Div = styled.div``;

const BorderSelect = ({
  header,
  name,
  label,
  register,
  required,
  error,
  icon,
  options,
  validationLabel,
  margin,
  readOnly,
  cy,
}) => {
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
          {options.map((option) => {
            return (
              <option
                selected={option.selected}
                value={typeof option !== 'string' ? option.value : option}
                key={typeof option !== 'string' ? option.value : option}
              >
                {typeof option !== 'string' ? option.text : option}
              </option>
            );
          })}
        </StyledSelect>
        {icon ? <Icon>{icon}</Icon> : null}
      </Select>
      {!error && validationLabel && <Validation>{validationLabel}</Validation>}
      <Div>{error}</Div>
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
