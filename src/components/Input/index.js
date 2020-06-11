import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {Container, TInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  console.disableYellowBox = true;
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
      {icon && <Icon name={icon} size={20} color="rgba(0, 0, 0, 0.3)" />}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
