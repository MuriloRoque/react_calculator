import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ButtonPanel from '../components/ButtonPanel';
import Button from '../components/Button';

const handleClick = () => { ''; };

test('renders 15 buttons', () => {
  const panel = shallow(<ButtonPanel handleClick={handleClick} />);
  expect(panel.find(Button)).to.have.lengthOf(19);
});
