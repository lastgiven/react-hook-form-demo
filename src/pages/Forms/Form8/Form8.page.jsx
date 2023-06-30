import { Col, Container, Row } from 'components/Grid/Grid.component';
import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { APP_CONTEXT } from 'utils/context';
import Form8Code from './Form8.code';
import Form8Component from './Form8.component';

const getDefaultProps = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Werner',
        age: '123',
        sub: {
          age: '123',
        },
        surname: 'Potgieter',
      });
    }, 10000);
  });

const Pre = styled.div`
  color: white;
  background-color: #242a4d;
  padding: 25px;
  border-radius: 10px;
  h2 {
    margin-top: 0;
  }
`;

const Form8 = () => {
  const { setPageTitle } = useContext(APP_CONTEXT);
  const [data, setData] = useState({});
  const methods = useForm({
    defaultValues: async () => getDefaultProps(),
  });
  useEffect(() => {
    setPageTitle('Form 8');
  });

  const submit = (values) => {
    setData(values);
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <FormProvider {...methods}>
            <Form8Component submit={submit} title="Form Provider With Async Default Props" />
          </FormProvider>
          <Pre>
            <h2>JSON Preview:</h2>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
          </Pre>
        </Col>
        <Col sm={6}>
          <Form8Code />
        </Col>
      </Row>
    </Container>
  );
};

export default Form8;
