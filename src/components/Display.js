import React from 'react';
import '../styles/Display.css';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div id="display">
      <p>{result}</p>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
