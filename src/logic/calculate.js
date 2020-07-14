import operations from './operate';

const calculations = (() => {
  const calculate = (calculator, buttonName) => {
    let { total, next, operation } = calculator;
    const operationSymbols = ['+', '-', '÷', 'x', '%'];
    if (buttonName === 'AC' || total === '∞') {
      total = null;
      next = null;
      operation = null;
    } else if (buttonName === '=') {
      if (total && next && operation) {
        total = operations.operate(total, next, operation);
        next = null;
        operation = null;
      }
    } else if (operationSymbols.includes(buttonName)) {
      if (buttonName === '%') {
        if (!next) {
          next = total;
        }
        operation = buttonName;
        total = operations.operate(null, next, operation);
        next = null;
        operation = null;
      } else if (total && next && operation) {
        total = operations.operate(total, next, operation);
        operation = buttonName;
        next = null;
      } else if (next && !operation) {
        total = next;
        operation = buttonName;
        next = null;
      } else {
        operation = buttonName;
      }
    } else if (buttonName === '+/-') {
      if (next) {
        next = operations.operate(next, '-1', 'x');
      } else if (total) {
        total = operations.operate(total, '-1', 'x');
      }
    } else if (next === null && operation === null && total) {
      next = buttonName;
      total = null;
    } else if (next) {
      if (buttonName !== '.' || (buttonName === '.' && next.indexOf(buttonName) < 0)) {
        next = next.concat(buttonName);
      }
    } else {
      next = buttonName;
    }
    return {
      total,
      next,
      operation,
    };
  };

  return { calculate };
})();

export default calculations;
