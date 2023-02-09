import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Controller } from 'react-hook-form';
import { SingleDatePicker as ReactSingleDatePicker } from 'react-dates';
import { Container, InputHeader, StyledWrapper, Label } from './SingleDatePicker.style';

const SingleDatePicker = ({
  control,
  name,
  defaultValue,
  label,
  header,
  required,
  openDirection,
  historical,
  disabled,
  error,
  displayFormat,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <InputHeader>{header}</InputHeader>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue === null ? moment().format(displayFormat) : moment(defaultValue)}
        rules={required}
        render={({ field: { onChange, value } }) => (
          <StyledWrapper>
            <ReactSingleDatePicker
              block
              numberOfMonths={1}
              placeholder={label}
              focused={focus}
              openDirection={openDirection}
              onFocusChange={({ focused }) => {
                setFocus(focused);
              }}
              isOutsideRange={() => historical}
              date={moment(value)}
              onDateChange={(date) => onChange(moment(date).format(displayFormat))}
              disabled={disabled}
              displayFormat={displayFormat}
            />
            <Label>{label}</Label>
          </StyledWrapper>
        )}
      />
      <div style={{ alignSelf: 'flex-start' }}>{error}</div>
    </Container>
  );
};

SingleDatePicker.defaultProps = {
  displayFormat: 'DD-MM-YYYY',
  header: '',
  required: {},
  openDirection: 'down',
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  historical: false,
  disabled: false,
  error: null,
};

SingleDatePicker.propTypes = {
  // input field header
  displayFormat: PropTypes.string,
  name: PropTypes.string.isRequired,
  header: PropTypes.string,
  historical: PropTypes.bool,
  required: PropTypes.object,
  label: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  defaultValue: PropTypes.any,
  openDirection: PropTypes.oneOf(['down', 'up']),
  disabled: PropTypes.bool,
  error: PropTypes.object,
};

export default SingleDatePicker;
