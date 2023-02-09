import { CopyBlock, monokaiSublime } from 'react-code-blocks';

const init = `/*
* PAGE START
*/
import React, { useContext, useEffect, useState } from 'react';
import { APP_CONTEXT } from 'utils/context';
import { Row, Col, Container } from 'components/Grid/Grid.component';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import Form1Component from './Form1.component';
import Form1Code from './Form1.code';

const Pre = styled.div\`
  color: white;
  background-color: #242a4d;
  padding: 25px;
  border-radius: 10px;
  h2 {
    margin-top: 0;
  }
\`;

const Form1 = () => {
  const { setActiveSideNav, setPageTitle } = useContext(APP_CONTEXT);
  const [data, setData] = useState({});
  const methods = useForm();
  useEffect(() => {
    setActiveSideNav('form1');
    setPageTitle('Form 1');
  });

  const submit = (values) => {
    setData(values);
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h2 style={{ marginTop: 0 }}>Simplistic form demo</h2>
          <FormProvider {...methods}>
            <Form1Component submit={submit} />
          </FormProvider>
          <Pre>
            <h2>JSON Preview:</h2>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
          </Pre>
        </Col>
        <Col sm={6}>
          <Form1Code />
        </Col>
      </Row>
    </Container>
  );
};

export default Form1;
/*
* PAGE END
*/
/*
* FORM START
*/
import PropTypes from 'prop-types';
import Button from 'components/Button/Button.component';
import BorderInput from 'components/Form/BorderInput/BorderInput.component';
import { Col, Row } from 'components/Grid/Grid.component';
import { useFormContext } from 'react-hook-form';

const Form1Component = ({ submit }) => {
  const { register, handleSubmit } = useFormContext();
  return (
    <Row>
      <Col xs={6}>
        <BorderInput label="Name" placeholder="enter name here" register={register} name="name" />
      </Col>
      <Col xs={6}>
        <BorderInput label="Surname" placeholder="enter surname here" register={register} name="surname" />
      </Col>
      <Col xs={12}>
        <Button.Primary type="button" onClick={handleSubmit(submit)} value="Submit" />
      </Col>
    </Row>
  );
};

Form1Component.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Form1Component;
/*
* FORM END
*/
/*
* BORDER INPUT START
*/
import PropTypes from 'prop-types';

// import styling of the component:
import { Container, StyledInput, Icon, InputHeader } from './BorderInput.style';

const BorderInput = ({
  name,
  label,
  register,
  required,
  icon,
  type,
  error,
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
}) => (
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
    <div style={{ alignSelf: 'flex-start' }}>{error}</div>
  </Container>
);

BorderInput.defaultProps = {
  register: undefined,
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
  register: PropTypes.func,
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

/*
* BORDER INPUT END
*/
`;

const Form1Code = () => (
  <CopyBlock
    customStyle={{ maxHeight: '97vh', overflow: 'auto' }}
    text={init}
    language="jsx"
    showLineNumbers
    wrapLines
    theme={monokaiSublime}
    codeBlock
  />
);

export default Form1Code;
