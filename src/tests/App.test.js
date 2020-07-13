import React from 'react';
import App from '../components/App';
import ButtonPanel from '../components/ButtonPanel';
import Display from '../components/Display';
import { shallow } from 'enzyme';
import { expect } from 'chai';

const app = shallow(<App />);

test('renders Display', () => {
  expect(app.find(Display)).to.have.lengthOf(1);
});

test('renders Button Panel', () => {
  expect(app.find(ButtonPanel)).to.have.lengthOf(1);
});

