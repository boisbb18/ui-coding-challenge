import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import EntryData from '../entry-data.js';

configure({ adapter: new Adapter() });

const shallowWithStore = (component,store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
}

test('Checking if span text exists', () => {
  const container = shallow(<EntryData name="Name" />);
  console.log('Name --> ',container);

});