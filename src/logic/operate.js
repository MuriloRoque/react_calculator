import Big from 'big.js';

const operations = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    if (operation === '+') {
      return Big(numberOne).plus(Big(numberTwo));
    }
    if (operation === '-') {
      return Big(numberOne).minus(Big(numberTwo));
    }
    if (operation === '÷') {
      if(numberTwo === '0'){
        alert('Division by zero is invalid')
      }
      else{
        return Big(numberOne).div(Big(numberTwo));
      }
    }
    if (operation === 'x') {
      return Big(numberOne).times(Big(numberTwo));
    }

    return Big(numberOne).times(Big(numberTwo).times(0.01));
  };

  return { operate };
})();

export default operations;
