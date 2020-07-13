import React from 'react';
import '../styles/Button.css';
import PropTypes from 'prop-types';

const Button = props => {
  const { className } = props;
  const { name } = props;
  return (
    <button type="button" className={className}>{name}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
