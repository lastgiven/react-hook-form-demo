import { CopyBlock, monokaiSublime } from 'react-code-blocks';

const init = `/*
* PAGE START
*/
import { Col, Container, Row } from 'components/Grid/Grid.component';
import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { APP_CONTEXT } from 'utils/context';
import Form7Code from './Form7.code';
import Form7Component from './Form.component';

const Pre = styled.div\`
  color: white;
  background-color: #242a4d;
  padding: 25px;
  border-radius: 10px;
  h2 {
    margin-top: 0;
  }
\`;

const Form7 = () => {
  const { setPageTitle } = useContext(APP_CONTEXT);
  const [data, setData] = useState({});
  const methods = useForm();
  useEffect(() => {
    setPageTitle('Form 7');
  });

  const submit = (values) => {
    setData(values);
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <FormProvider {...methods}>
            <Form7Component submit={submit} title="Form for create and weird validations" />
          </FormProvider>
          <Pre>
            <h2>JSON Preview:</h2>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
          </Pre>
        </Col>
        <Col sm={6}>
          <Form7Code />
        </Col>
      </Row>
    </Container>
  );
};

export default Form7;

/*
* PAGE END
*/
/*
* FORM START
*/
import Button from 'components/Button/Button.component';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import BorderInput from 'components/Form/BorderInput/BorderInput.component';
import { Col, Row } from 'components/Grid/Grid.component';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const FormComponent = ({ submit, title, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <Row>
      <Col xs={12}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Name"
          labelAbove
          placeholder="enter name here"
          register={register}
          name="name"
          required={{
            required: 'Please provide a valid name',
          }}
          error={errors.name && <ErrorMessage message={errors.name.message} />}
        />
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Surname"
          labelAbove
          placeholder="enter surname here"
          register={register}
          name="surname"
          required={{
            required: 'Please provide a valid surname',
            validate: {
              containsLick: (v) => {
                if (v.toLowerCase().includes('lick')) {
                  return 'Cannot contain lick';
                }
                return true;
              },
              containsSpaces: (v) => {
                if (
                  v.toLowerCase().includes(' ') ||
                  v.toLowerCase().includes('  ') ||
                  v.toLowerCase().includes('   ')
                ) {
                  return 'Cannot contain spaces';
                }
                return true;
              },
            },
          }}
          error={errors.surname && <ErrorMessage message={errors.surname.message} />}
        />
      </Col>
      <Col xs={12}>
        <Button.Primary type="button" onClick={handleSubmit(submit)} value="Submit" loading={loading} />
      </Col>
    </Row>
  );
};

FormComponent.propTypes = {
  submit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FormComponent;

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

const Form7Code = () => (
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

export default Form7Code;
