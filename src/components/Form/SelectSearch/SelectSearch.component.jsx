import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Select, { components } from 'react-select';

import { CheckBox, Container as CheckBoxContainer, CheckMark } from '../CheckBox/CheckBox.style';
import { Container, SelectHeader, Validation, style, Div } from './SelectSearch.style';

const CheckboxOption = ({ getStyles, isDisabled, isFocused, isSelected, children, innerProps, ...rest }) => {
  // prop assignment
  const props = {
    ...innerProps,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <CheckBoxContainer data-cy={`cb${children}`}>
        {children}
        <CheckBox type="checkbox" checked={isSelected} onChange={() => null} />
        <CheckMark className="checkMark" />
      </CheckBoxContainer>
    </components.Option>
  );
};

CheckboxOption.defaultProps = {
  getStyles: undefined,
  isDisabled: false,
  isFocused: false,
  isSelected: false,
  children: undefined,
  innerProps: undefined,
};

CheckboxOption.propTypes = {
  getStyles: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  children: PropTypes.any,
  innerProps: PropTypes.any,
};

// Normal select
const SelectList = (props) => {
  const {
    header,
    validationLabel,
    name,
    required,
    control,
    error,
    customStyle,
    options,
    isMulti,
    allowSelectAll,
    showCheckBox,
    label,
    menuPlacement,
    placeholder,
    isClearable,
    isSearchable,
    isDisabled,
    isLoading,
    filterOption,
    customComponents,
    fontSize,
    onChange,
    cy,
    onInputChange,
    closeMenuOnSelect,
    controlShouldRenderValue,
    hideSelectedOptions,
    maxMenuHeight,
  } = props;

  const allOption = useMemo(() => {
    return { label: 'Select All', value: '*' };
  }, []);

  useEffect(() => {
    if (allowSelectAll && options.length > 0) {
      options.splice(0, 0, allOption);
    }
  }, [allOption, allowSelectAll, options]);

  return (
    <>
      <Container style={customStyle}>
        <SelectHeader fontSize={fontSize}>{header}</SelectHeader>
        <Controller
          control={control}
          name={name}
          rules={required}
          render={({ field: { onChange: onValueChange, value } }) => {
            const handleChange = (selected, event) => {
              if (onChange) {
                onChange(selected);
              }
              if (isMulti) {
                if (allowSelectAll) {
                  if (event.option.value === '*' && event.action === 'select-option') {
                    return onValueChange(options.map((option) => option.value));
                  }
                  if (event.option.value === '*' && event.action === 'deselect-option') {
                    return onValueChange([]);
                  }
                }

                return onValueChange(selected.map((sel) => sel.value));
              }
              return onValueChange(selected ? selected.value : selected);
            };

            const getSelected = () => {
              if (!value) {
                return null;
              }
              if (isMulti && value) {
                if (allowSelectAll) {
                  const arr = [allOption, ...options];
                  if (value.length > 0 && value.length === options.length) {
                    const selectedAllOption = value.find((option) => option === '*');
                    if (!selectedAllOption) {
                      value.splice(0, 0, '*');
                    }
                  }
                  return arr.filter((option) => value.find((val) => option.value === val));
                }
                return options.filter((option) => value.find((val) => option.value === val));
              }

              return options.find((option) => option.value === value);
            };

            return (
              <>
                <Select
                  id={cy}
                  {...props}
                  label={label}
                  name={name}
                  placeholder={placeholder}
                  value={getSelected()}
                  isClearable={isClearable}
                  isMulti={isMulti}
                  allowSelectAll={allowSelectAll}
                  isSearchable={isSearchable}
                  isDisabled={isDisabled}
                  closeMenuOnSelect={closeMenuOnSelect}
                  controlShouldRenderValue={controlShouldRenderValue}
                  hideSelectedOptions={hideSelectedOptions}
                  filterOption={filterOption}
                  components={
                    showCheckBox
                      ? {
                          Option: CheckboxOption,
                        }
                      : customComponents
                  }
                  isLoading={isLoading}
                  isRequired={required}
                  styles={style}
                  onChange={handleChange}
                  menuPlacement={menuPlacement}
                  onInputChange={onInputChange}
                  maxMenuHeight={maxMenuHeight}
                />
              </>
            );
          }}
        />
      </Container>
      {!error && validationLabel && <Validation>{validationLabel}</Validation>}
      <Div>{error}</Div>
    </>
  );
};
SelectList.defaultProps = {
  fontSize: '',
  customComponents: {},
  styles: {},
  isLoading: false,
  isDisabled: false,
  isSearchable: true,
  closeMenuOnSelect: true,
  header: '',
  validationLabel: undefined,
  menuPlacement: 'auto',
  required: {},
  options: [],
  label: '',
  className: '',
  isClearable: false,
  onChange: undefined,
  onInputChange: undefined,
  error: null,
  placeholder: 'Select',
  customStyle: {},
  isMulti: false,
  filterOption: undefined,
  control: undefined,
  cy: undefined,
  controlShouldRenderValue: true,
  showCheckBox: false,
  hideSelectedOptions: true,
  allowSelectAll: false,
  maxMenuHeight: 'auto',
};
SelectList.propTypes = {
  fontSize: PropTypes.string,
  customComponents: PropTypes.object,
  styles: PropTypes.object,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  validationLabel: PropTypes.string,
  menuPlacement: PropTypes.string,
  required: PropTypes.object,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  className: PropTypes.string,
  isClearable: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  control: PropTypes.object,
  error: PropTypes.object,
  placeholder: PropTypes.string,
  customStyle: PropTypes.object,
  isMulti: PropTypes.bool,
  showCheckBox: PropTypes.bool,
  header: PropTypes.string,
  filterOption: PropTypes.func,
  cy: PropTypes.string,
  controlShouldRenderValue: PropTypes.bool,
  hideSelectedOptions: PropTypes.bool,
  allowSelectAll: PropTypes.bool,
  maxMenuHeight: PropTypes.any,
};

export default SelectList;
