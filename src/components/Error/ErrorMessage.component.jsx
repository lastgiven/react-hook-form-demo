import { string } from 'prop-types';
import { P } from '../Typography/Typography.component';
import { ErrorMessageWrapper } from './Errors.style';

const ErrorMessage = ({ message }) => (
  <ErrorMessageWrapper>
    <P>{`* ${message}`}</P>
  </ErrorMessageWrapper>
);

ErrorMessage.propTypes = {
  message: string.isRequired,
};

export default ErrorMessage;
