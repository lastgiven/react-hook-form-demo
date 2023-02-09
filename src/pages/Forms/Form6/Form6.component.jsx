import Button from 'components/Button/Button.component';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import BorderInput from 'components/Form/BorderInput/BorderInput.component';
import { Col, Row } from 'components/Grid/Grid.component';
import PropTypes from 'prop-types';
import { useFieldArray, useFormContext } from 'react-hook-form';

const Form6Component = ({ submit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'guardians',
  });
  return (
    <Row>
      <Col xs={12}>
        <h2 style={{ marginTop: 0 }}>Form with Field Array</h2>
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
        <Button.Secondary type="button" onClick={() => append({ name: '', surname: '' })} value="Add Guardian" />
      </Col>
      <Col xs={12} style={{ maxHeight: '300px', overflowX: 'hidden', overflowY: 'scroll' }}>
        {fields.map((item, index) => (
          <Row key={item.index}>
            <Col xs={12}>
              <h4>Guardian {index + 1} Data</h4>
            </Col>
            <Col xs={5}>
              <BorderInput
                label="Name"
                labelAbove
                placeholder="enter name here"
                register={register}
                name={`guardians.${index}.name`}
                required={{
                  required: 'Please provide a valid name',
                }}
                error={
                  errors?.guardian?.[index]?.name && <ErrorMessage message={errors.guardian[index].name.message} />
                }
              />
            </Col>
            <Col xs={5}>
              <BorderInput
                label="Surname"
                labelAbove
                placeholder="enter surname here"
                register={register}
                name={`guardians.${index}.surname`}
                required={{
                  required: 'Please provide a valid surname',
                }}
                error={
                  errors?.guardians?.[index]?.surname && (
                    <ErrorMessage message={errors.guardians[index].surname.message} />
                  )
                }
              />
            </Col>
            <Col xs={2}>
              <Button.Secondary
                width="100%"
                type="button"
                onClick={() => remove(index)}
                value="Remove"
                style={{ marginTop: '25px' }}
              />
            </Col>
          </Row>
        ))}
      </Col>

      <Col xs={12}>
        <Button.Primary type="button" onClick={handleSubmit(submit)} value="Submit" />
      </Col>
    </Row>
  );
};

Form6Component.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Form6Component;
