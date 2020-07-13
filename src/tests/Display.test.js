import React from 'react';
import { render } from '@testing-library/react';
import Display from '../components/Display';

test('renders the Display text correctly', () => {
  const { getByText } = render(<Display result='15' />);
  const resultDisplay = getByText(/15/i);
  expect(resultDisplay).toBeInTheDocument();
});
