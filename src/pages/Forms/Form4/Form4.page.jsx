import { Col, Container, Row } from 'components/Grid/Grid.component';
import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { APP_CONTEXT } from 'utils/context';
import Form4Code from './Form4.code';
import Form4Component from './Form4.component';

const Pre = styled.div`
  color: white;
  background-color: #242a4d;
  padding: 25px;
  border-radius: 10px;
  h2 {
    margin-top: 0;
  }
`;

const Form4 = () => {
  const { setPageTitle } = useContext(APP_CONTEXT);
  const [data, setData] = useState({});
  const methods = useForm({
    defaultValues: {
      name: 'Werner',
      surname: 'Potgieter',
    },
  });
  useEffect(() => {
    setPageTitle('Form 4');
  });

  const submit = (values) => {
    setData(values);
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <FormProvider {...methods}>
            <Form4Component submit={submit} />
          </FormProvider>
          <Pre>
            <h2>JSON Preview:</h2>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
          </Pre>
        </Col>
        <Col sm={6}>
          <Form4Code />
        </Col>
      </Row>
    </Container>
  );
};

export default Form4;
