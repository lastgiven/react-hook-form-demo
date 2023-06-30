import Button from 'components/Button/Button.component';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import BorderInput from 'components/Form/BorderInput/BorderInput.component';
import SingleDatePicker from 'components/Form/SingleDatePicker/SingleDatePicker.component';
import { Col, Row } from 'components/Grid/Grid.component';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const Form4Component = ({ submit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Row>
      <Col xs={12}>
        <h2 style={{ marginTop: 0 }}>Form with a controlled input</h2>
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Name"
          placeholder="enter name here"
          register={register}
          labelAbove
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
          placeholder="enter surname here"
          labelAbove
          register={register}
          name="surname"
          required={{
            required: 'Please provide a valid surname',
          }}
          error={errors.surname && <ErrorMessage message={errors.surname.message} />}
        />
      </Col>
      <Col xs={6}>
        <SingleDatePicker
          control={control}
          name="dateOfBirth"
          header="Date of birth"
          defaultValue={moment()}
          error={errors.dateOfBirth && <ErrorMessage message={errors.dateOfBirth.message} />}
          required={{
            required: 'Please select date of birth',
          }}
        />
      </Col>
      <Col xs={12}>
        <Button.Primary type="button" onClick={handleSubmit(submit)} value="Submit" />
      </Col>
    </Row>
  );
};

Form4Component.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Form4Component;
