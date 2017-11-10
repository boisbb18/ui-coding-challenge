import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel.js';

configure({ adapter: new Adapter() });
test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');
  console.log('Checkbox --> ',checkbox.text());
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');
})