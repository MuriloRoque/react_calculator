import calculations from '../logic/calculate'
import { expect } from 'chai'
import Big from 'big.js';

test('AC button', () => {
  const calculator = { total: '1', next: '5', operation: '+' }
  expect(calculations.calculate(calculator, 'AC')).to.be.eql({ total: null, next: null, operation: null })
})

test('= button', () => {
  const calculator = { total: '1', next: '5', operation: '+' }
  expect(calculations.calculate(calculator, '=')).to.eql({ total: Big(6), next: null, operation: null })
})

test('operation with full calculator object', () => {
  const calculator = { total: '1', next: '5', operation: '+' }
  expect(calculations.calculate(calculator, '+')).to.eql({ total: Big(6), next: null, operation: '+' })
})

test('next without operation', () => {
  const calculator = { total: '1', next: '5', operation: null }
  expect(calculations.calculate(calculator, '+')).to.eql({ total: '5', next: null, operation: '+' })
})

test('only operation button', () => {
  const calculator = { total: '1', next: null, operation: null }
  expect(calculations.calculate(calculator, '+')).to.eql({ total: '1', next: null, operation: '+' })
})

test('+/- button with next without total', () => {
  const calculator = { total: null, next: '5', operation: null }
  expect(calculations.calculate(calculator, '+/-')).to.eql({ total: null, next: Big('-5'), operation: null })
})

test('+/- button with total', () => {
  const calculator = { total: '5', next: null, operation: null }
  expect(calculations.calculate(calculator, '+/-')).to.eql({ total: Big('-5'), next: null, operation: null })
})

test('only next', () => {
  const calculator = { total: null, next: '5', operation: null }
  expect(calculations.calculate(calculator, '5')).to.eql({ total: null, next: '55', operation: null })
})

test('without next', () => {
  const calculator = { total: null, next: null, operation: null }
  expect(calculations.calculate(calculator, '5')).to.eql({ total: null, next: '5', operation: null })
})
