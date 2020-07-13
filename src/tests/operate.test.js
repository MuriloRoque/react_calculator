import operations from '../logic/operate'
import { expect } from 'chai'
import Big from 'big.js';

const numberOne = 2;
const numberTwo = 10;

test('the sum of two numbers', () => {
  expect(operations.operate(numberOne, numberTwo, '+')).to.be.eql(Big(12))
})

test('the difference of two numbers', () => {
  expect(operations.operate(numberOne, numberTwo, '-')).to.be.eql(Big(-8))
})

test('the division of two numbers', () => {
  expect(operations.operate(numberOne, numberTwo, '÷')).to.be.eql(Big(0.2))
})

test('the multiplication of two numbers', () => {
  expect(operations.operate(numberOne, numberTwo, 'x')).to.be.eql(Big(20))
})

test('the percentage of two numbers', () => {
  expect(operations.operate(numberOne, numberTwo, '%')).to.be.eql(Big(0.2))
})
