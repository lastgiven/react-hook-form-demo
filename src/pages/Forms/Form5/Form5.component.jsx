import Button from 'components/Button/Button.component';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import BorderInput from 'components/Form/BorderInput/BorderInput.component';
import { Col, Row } from 'components/Grid/Grid.component';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Form5Component = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  return (
    <Row>
      <Col xs={12}>
        <h2 style={{ marginTop: 0 }}>Form with JSON structure build</h2>
      </Col>
      <Col xs={12}>
        <h4>User Data</h4>
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Name"
          labelAbove
          placeholder="enter name here"
          register={register}
          name="user.name"
          required={{
            required: 'Please provide a valid name',
          }}
          error={errors?.user?.name && <ErrorMessage message={errors.user.name.message} />}
        />
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Surname"
          labelAbove
          placeholder="enter surname here"
          register={register}
          name="user.surname"
          required={{
            required: 'Please provide a valid surname',
          }}
          error={errors?.user?.surname && <ErrorMessage message={errors.user.surname.message} />}
        />
      </Col>
      <Col xs={12}>
        <h4>Guardian Data</h4>
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Name"
          labelAbove
          placeholder="enter name here"
          register={register}
          name="guardian.name"
          required={{
            required: 'Please provide a valid name',
          }}
          error={errors?.guardian?.name && <ErrorMessage message={errors.guardian.name.message} />}
        />
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Surname"
          labelAbove
          placeholder="enter surname here"
          register={register}
          name="guardian.surname"
          required={{
            required: 'Please provide a valid surname',
          }}
          error={errors?.guardian?.surname && <ErrorMessage message={errors.guardian.surname.message} />}
        />
      </Col>
      <Col xs={12}>
        <Button.Primary type="button" onClick={handleSubmit(submit)} value="Submit" />
      </Col>
    </Row>
  );
};

Form5Component.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Form5Component;
