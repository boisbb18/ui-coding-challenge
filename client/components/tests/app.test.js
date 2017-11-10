import React from 'react';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
import ConnectedApp,{ App } from '../app.js';
import ConnectedEntryData,{ EntryData } from '../entry-data.js';
import { createMockStore } from 'redux-test-utils';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createStore} from 'redux';
import renderer from 'react-test-renderer'


configure({ adapter: new Adapter() });

describe('APP container ',() => {
  const initialState = {
    modalView: false,
      view: '',
      info: { Name: ['None Added'],Address: ['None Added'],Teams:['None Added']}
  }
  const mockStore = configureStore();
  let store, container,wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedApp store={store} />);
      wrapper = mount(<Provider store={store}><ConnectedApp /></Provider>);
  })

   it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });
// Testing if header exists
   it('contains header', () => {
         expect(wrapper.contains(<div className="header">
        <p id="text"> Sports Magazine </p>
      </div>
         )).toBe(true)
    });
})
    describe('EntryData container',() => {
     const initialState = {
        modalView: false,
          view: '',
          info: { Name: ['None Added'],Address: ['None Added'],Teams:['None Added']}
      }
    const mockStore = configureStore();
     let store, container,wrapper;
     let testFunc = () =>{
      console.log('For button');
     }

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedEntryData store={store} />);
    wrapper = mount(<Provider store={store}><ConnectedEntryData name={'Name'} /></Provider>);
  });
     it('+++ render the connected(SMART) component in EntryData ', () => {
       expect(container.length).toEqual(1)
    });
  
    it('contains header', () => {
         expect(wrapper.contains(<div className="info">
        <label>Name</label>
        <div>
          <button className="add">Add Name</button>
          <span className="added">None Added</span>
          </div>
      </div>
         )).toBe(false)
    });
})

