import React from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import { CloseIcon, Container, ChipsHolder, Chip, ChipText, Icon } from './Chips.style';

const Chips = ({
  label,
  fontWeight,
  backgroundColor,
  borderRadius,
  color,
  outline,
  padding,
  icon,
  IconColor,
  width,
  textMargin,
  showClose,
  onRemove,
  closeBtnCy,
}) => {
  return (
    <Container>
      <ChipsHolder>
        <Chip
          width={width}
          padding={padding}
          outline={outline}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
        >
          {icon ? <Icon IconColor={IconColor}>{icon}</Icon> : null}
          <ChipText textMargin={textMargin} fontWeight={fontWeight} color={color}>
            {label}
          </ChipText>
          {showClose && (
            <CloseIcon data-cy={closeBtnCy} IconColor={IconColor} onClick={onRemove}>
              <FiX />
            </CloseIcon>
          )}
        </Chip>
      </ChipsHolder>
    </Container>
  );
};

Chips.propTypes = {
  textMargin: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.string,
  IconColor: PropTypes.string,
  icon: PropTypes.element,
  padding: PropTypes.string,
  outline: PropTypes.string,
  color: PropTypes.any,
  label: PropTypes.string,
  backgroundColor: PropTypes.any,
  borderRadius: PropTypes.string,
  showClose: PropTypes.bool,
  onRemove: PropTypes.func,
  closeBtnCy: PropTypes.string,
};

Chips.defaultProps = {
  textMargin: '',
  fontWeight: '',
  width: '',
  IconColor: '#000000',
  icon: undefined,
  padding: '',
  outline: 'none',
  color: '#fffff',
  label: '',
  backgroundColor: '',
  borderRadius: '',
  showClose: false,
  onRemove: undefined,
  closeBtnCy: '',
};

export default Chips;
