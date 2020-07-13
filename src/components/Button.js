import React from 'react';
import '../styles/css/Button.css';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const wideClass = wide ? `${color} wide` : `${color}`;
  return (
    <button type="button" className={wideClass}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
