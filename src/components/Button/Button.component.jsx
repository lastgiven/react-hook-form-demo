import PropTypes from 'prop-types';
import {
  Icon,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTertiaryButton,
  StyledQuaternaryButton,
  StyledQuaternaryButtonText,
  StyledQuaternaryButtonTextWrapper,
} from './Button.style';
/**
 * Button component for generic use in project.
 */

export const Primary = ({ icon, onClick, value, loading, width, margin, disabled, style, id, cy }) => {
  // TODO!: Add loader to the loading state of the button
  const canClick = () => {
    if (!loading) {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <StyledPrimaryButton
      style={style}
      onClick={canClick}
      value={value}
      disabled={loading || disabled}
      width={width}
      margin={margin}
      id={id}
      data-cy={cy}
    >
      {icon ? <Icon>{icon}</Icon> : null}
      {!loading && value}
      {loading && 'Loading ...'}
    </StyledPrimaryButton>
  );
};

Primary.propTypes = {
  /**
   * A react-icons Icon
   */
  icon: PropTypes.element,
  /**
   * The width of the button
   */
  width: PropTypes.string,
  /**
   * The margin of the button
   */
  margin: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  cy: PropTypes.string,
};

Primary.defaultProps = {
  style: undefined,
  onClick: undefined,
  loading: false,
  disabled: false,
  icon: undefined,
  width: undefined,
  margin: undefined,
  id: '',
  cy: undefined,
};

/**
 * Button component for generic use in project.
 */
export const Secondary = ({ icon, onClick, value, loading, width, margin, color, disabled, style, cy, fontWeight }) => {
  // TODO!: Add loader to the loading state of the button
  const canClick = () => {
    if (!loading) {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <StyledSecondaryButton
      fontWeight={fontWeight}
      style={style}
      onClick={canClick}
      value={value}
      disabled={loading || disabled}
      width={width}
      margin={margin}
      color={color}
      data-cy={cy}
    >
      {icon ? <Icon>{icon}</Icon> : null}
      {!loading && <span>{value}</span>}
      {loading && 'Loading ...'}
    </StyledSecondaryButton>
  );
};

Secondary.propTypes = {
  fontWeight: PropTypes.string,
  icon: PropTypes.element,
  style: PropTypes.object,
  width: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  cy: PropTypes.string,
};

Secondary.defaultProps = {
  fontWeight: undefined,
  color: undefined,
  onClick: undefined,
  loading: false,
  style: undefined,
  disabled: false,
  icon: undefined,
  width: undefined,
  margin: undefined,
  cy: undefined,
};

/**
 * Button component for generic use in project.
 */
export const Tertiary = ({ icon, onClick, value, loading, width, margin, color, disabled, style, cy }) => {
  // TODO!: Add loader to the loading state of the button
  const canClick = () => {
    if (!loading) {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <StyledTertiaryButton
      data-cy={cy}
      style={style}
      onClick={canClick}
      value={value}
      disabled={loading || disabled}
      width={width}
      margin={margin}
      color={color}
    >
      {icon ? <Icon>{icon}</Icon> : null}
      {!loading && value}
      {loading && 'Loading ...'}
    </StyledTertiaryButton>
  );
};

Tertiary.propTypes = {
  icon: PropTypes.element,
  style: PropTypes.object,
  width: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  cy: PropTypes.string,
};

Tertiary.defaultProps = {
  color: undefined,
  onClick: undefined,
  loading: false,
  disabled: false,
  icon: undefined,
  width: undefined,
  margin: undefined,
  style: undefined,
  cy: undefined,
};

export const Quaternary = ({
  icon,
  onClick,
  value,
  loading,
  width,
  margin,
  color,
  disabled,
  style,
  marginLeft,
  cy,
}) => {
  // TODO!: Add loader to the loading state of the button
  const canClick = () => {
    if (!loading) {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <StyledQuaternaryButton
      style={style}
      onClick={canClick}
      value={value}
      disabled={loading || disabled}
      width={width}
      margin={margin}
      color={color}
      data-cy={cy}
    >
      <StyledQuaternaryButtonTextWrapper style={style}>
        {icon ? <Icon>{icon}</Icon> : null}
        <StyledQuaternaryButtonText style={style} marginLeft={marginLeft}>
          {!loading && value}
        </StyledQuaternaryButtonText>
        {loading && 'Loading ...'}
      </StyledQuaternaryButtonTextWrapper>
    </StyledQuaternaryButton>
  );
};

Quaternary.propTypes = {
  icon: PropTypes.element,
  style: PropTypes.object,
  width: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  marginLeft: PropTypes.string,
  cy: PropTypes.string,
};

Quaternary.defaultProps = {
  color: undefined,
  onClick: undefined,
  loading: false,
  disabled: false,
  icon: undefined,
  width: undefined,
  margin: undefined,
  style: undefined,
  marginLeft: undefined,
  cy: undefined,
};

/**
 * Button for the project.
 *
 * How to use:
 *
 * <Button.Primary {...props} />
 */
const Button = {
  Primary,
  Secondary,
  Tertiary,
  Quaternary,
};

export default Button;
