import React, { useContext, useEffect, useState } from 'react';
import { APP_CONTEXT } from 'utils/context';
import { Row, Col, Container } from 'components/Grid/Grid.component';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import Form1Component from './Form1.component';
import Form1Code from './Form1.code';

const Pre = styled.div`
  color: white;
  background-color: #242a4d;
  padding: 25px;
  border-radius: 10px;
  h2 {
    margin-top: 0;
  }
`;

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
          <h2 style={{ marginTop: 0, color: 'white' }}>Simplistic form demo</h2>
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
