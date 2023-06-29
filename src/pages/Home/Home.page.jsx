import { COLOR_PRIMARY } from 'common/styles/Colors';
import { Col, Container, Row } from 'components/Grid/Grid.component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const forms = [
  {
    name: 'Simplistic form demo',
    path: '/form1',
    number: '1',
  },
  {
    name: 'Form with validation',
    path: '/form2',
    number: '2',
  },
  {
    name: 'Form with BAD PRACTICE',
    path: '/form2.1',
    number: '2.1',
  },
  {
    name: 'Form with GOOD PRACTICE',
    path: '/form2.2',
    number: '2.2',
  },
  {
    name: 'Form with default props',
    path: '/form3',
    number: '3',
  },
  {
    name: 'Form with a controlled input',
    path: '/form4',
    number: '4',
  },
  {
    name: 'Form with JSON structure build',
    path: '/form5',
    number: '5',
  },
  {
    name: 'Form with Field Array',
    path: '/form6',
    number: '6',
  },
  {
    name: 'Form Context',
    path: '/form7',
    number: '7',
  },
  {
    name: 'Form Context with async default values',
    path: '/form8',
    number: '8',
  },
];

const FormHolder = styled.div`
  border: 1px solid #e4e4e4;
  height: 150px;
  border-radius: 5px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  outline: 0;
  color: ${COLOR_PRIMARY};
  text-decoration: none;
  text-align: center;
`;

const Home = () => (
  <Container>
    <Row>
      <Col sm={12}>
        <h1 style={{ color: 'white' }}>Forms:</h1>
      </Col>
    </Row>
    <Row>
      {forms.map((form) => (
        <Col sm={4}>
          <Link to={form.path} style={{ textDecoration: 'none' }}>
            <FormHolder>
              {form.number}) {form.name}
            </FormHolder>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Home;
