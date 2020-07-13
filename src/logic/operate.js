import Big from './big.mjs';

const operations = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    if(operation === '+'){
      return Big(numberOne) + Big(numberTwo);
    }
    else if(operation === '-'){
      return Big(numberOne) - Big(numberTwo);
    }
    else if(operation === '÷'){
      return Big(numberOne) / Big(numberTwo);
    }
    else if(operation === 'x'){
      return Big(numberOne) * Big(numberTwo);
    }
    else{
      return Big(numberOne)/100 * Big(numberTwo);
    }
  };

  return { operate };
})();

export default operations;
