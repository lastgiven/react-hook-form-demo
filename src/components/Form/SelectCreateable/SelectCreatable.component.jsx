import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { Validation } from '../SelectSearch/SelectSearch.style';
import { Div, style } from './SelectCreatable.style';

// Normal select
const SelectList = ({
  validationLabel,
  name,
  required,
  control,
  error,
  options,
  menuPlacement,
  placeholder,
  isClearable,
  isSearchable,
  isDisabled,
  isLoading,
}) => (
  <>
    <Controller
      control={control}
      name={name}
      rules={required}
      render={({ field: { value }, onChange }) => (
        <Select
          name={name}
          placeholder={placeholder}
          value={value}
          options={options}
          isClearable={isClearable}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isRequired={required}
          styles={style}
          onChange={onChange}
          menuPlacement={menuPlacement}
        />
      )}
    />

    {!error && validationLabel && <Validation>{validationLabel}</Validation>}
    <Div>{error}</Div>
  </>
);
SelectList.defaultProps = {
  isLoading: false,
  isDisabled: false,
  isSearchable: true,
  validationLabel: undefined,
  menuPlacement: 'auto',
  required: {},
  options: [],
  isClearable: false,
  error: null,
  placeholder: 'Select',
};
SelectList.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  validationLabel: PropTypes.string,
  menuPlacement: PropTypes.string,
  required: PropTypes.object,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  isClearable: PropTypes.bool,
  control: PropTypes.any.isRequired,
  error: PropTypes.object,
  placeholder: PropTypes.string,
};

export default SelectList;
