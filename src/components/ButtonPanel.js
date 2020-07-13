import React from 'react';
import '../styles/css/ButtonPanel.css';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => {
  const firstRow = ['AC', '+/-', '%', '÷'];
  const secondRow = ['7', '8', '9', 'x'];
  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];
  const fifthRow = ['0', '.', '='];
  const rows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
  return (
    <div id="button-panel">
      {rows.map(row => (
        <div className="row" key={row}>
          {row.map(char => (
            <Button
              handleClick={props.handleClick}
              key={char}
              name={`${char}`}
              color={['+', '-', 'x', '÷', '='].includes(char) ? 'orange' : ''}
              wide={char === '0'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
