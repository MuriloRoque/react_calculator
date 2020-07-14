import React from 'react';
import '../styles/css/Button.css';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, handleClick,
}) => {
  const wideClass = wide ? `${color} wide` : `${color}`;
  return (
    <button type="button" className={wideClass} onClick={() => handleClick(name)}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
