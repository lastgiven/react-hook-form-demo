import { Col, Container, Row } from 'components/Grid/Grid.component';
import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { APP_CONTEXT } from 'utils/context';
import Form8Code from './Form7.code';
import Form8Component from './Form.component';

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
  const [loading, setLoading] = useState(true);
  const methods = useForm({
    mode: 'all',
  });
  const { reset } = methods;
  useEffect(() => {
    setPageTitle('Form 8');
  });

  useEffect(() => {
    setTimeout(() => {
      reset({
        name: 'Hello',
        surname: 'User',
      });
      setLoading(false);
    }, 2000);
  }, [reset, setLoading]);

  const submit = (values) => {
    setData(values);
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <FormProvider {...methods}>
            <Form8Component submit={submit} title="Edit Details and weird validations" loading={loading} />
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
