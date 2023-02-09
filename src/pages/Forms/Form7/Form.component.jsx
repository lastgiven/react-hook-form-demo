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
