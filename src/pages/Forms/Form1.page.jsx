import React, { useContext, useEffect } from 'react';
import { APP_CONTEXT } from 'utils/context';
import { Row, Col, Container } from 'components/Grid/Grid.component';

const Form1 = () => {
  const { setActiveSideNav, setPageTitle } = useContext(APP_CONTEXT);
  useEffect(() => {
    setActiveSideNav('home');
    setPageTitle('Home');
  });

  return (
    <Container>
      <Row>
        <Col sm={12}>TODO:</Col>
        <Col sm={12}>Build out the correct dash that will display the amount of client the organization has. </Col>
      </Row>
    </Container>
  );
};

export default Form1;
