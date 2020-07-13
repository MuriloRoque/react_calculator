import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';

test('renders the button texts correctly', () => {
  const { getByText } = render(<Button name="=" wide={false} />);
  const equalButton = getByText(/=/i);
  expect(equalButton).toBeInTheDocument();
});

test('the button roles are button', () => {
  const { getByRole } = render(<Button name="=" wide={false} />);
  const equalButton = getByRole('button');
  expect(equalButton).toBeInTheDocument();
});
