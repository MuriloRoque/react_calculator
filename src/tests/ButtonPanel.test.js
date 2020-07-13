import React from 'react';
import ButtonPanel from '../components/ButtonPanel';
import Button from '../components/Button';
import { shallow } from 'enzyme';
import { expect } from 'chai';

test('renders 15 buttons', () => {
  const panel = shallow(<ButtonPanel />);
  expect(panel.find(Button)).to.have.lengthOf(19);
});
