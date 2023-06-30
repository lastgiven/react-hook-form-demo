import Button from 'components/Button/Button.component';
import BorderInput from 'components/Form2/BorderInput/BorderInput.component';
import { Col, Row } from 'components/Grid/Grid.component';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const mockRequest = (val) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('val: ', val);
      if (val === 'test') {
        resolve('Not Valid');
      } else {
        resolve(true);
      }
    }, 5000);
  });

const FormComponent = ({ submit, title, loading }) => {
  const { handleSubmit } = useFormContext();
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
          name="name"
          required={{
            required: 'Please provide a valid name',
          }}
        />
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Age"
          labelAbove
          placeholder="enter age here"
          name="age"
          required={{
            required: 'Please provide a valid age',
            min: 15,
            setValueAs: (v) => (v === '69' ? 'No No' : v),
          }}
        />
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Age"
          labelAbove
          placeholder="enter age here"
          name="sub.age"
          required={{
            valueAsNumber: true,
            required: 'Please provide a valid age',
            min: 15,
            setValueAs: (v) => (v === '69' ? 'No No' : v),
          }}
        />
      </Col>
      <Col xs={6}>
        <BorderInput
          label="Surname"
          labelAbove
          placeholder="enter surname here"
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
              isValid: async (v) => mockRequest(v) || 'error message',
            },
          }}
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
