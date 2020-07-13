import React from 'react';
import '../styles/css/Button.css';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const colorClass = color ? 'orange' : '';
  const wideClass = wide ? `${colorClass} wide` : `${colorClass}`;
  return (
    <button type="button" className={wideClass}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
