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
        <BorderInput labelAbove label="Name" placeholder="enter name here" register={register} name="name" />
      </Col>
      <Col xs={6}>
        <BorderInput labelAbove label="Surname" placeholder="enter surname here" register={register} name="surname" />
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
