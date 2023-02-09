import Button from 'components/Button/Button.component';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import BorderInput from 'components/Form/BorderInput/BorderInput.component';
import { Col, Row } from 'components/Grid/Grid.component';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Form3Component = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <Row>
      <Col xs={12}>
        <h2 style={{ marginTop: 0 }}>Form with default props</h2>
      </Col>
      <Col xs={6}>
        <BorderInput
          labelAbove
          label="Name"
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
          labelAbove
          label="Surname"
          placeholder="enter surname here"
          register={register}
          name="surname"
          required={{
            required: 'Please provide a valid surname',
          }}
          error={errors.surname && <ErrorMessage message={errors.surname.message} />}
        />
      </Col>
      <Col xs={12}>
        <Button.Primary type="button" onClick={handleSubmit(submit)} value="Submit" />
      </Col>
    </Row>
  );
};

Form3Component.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Form3Component;
