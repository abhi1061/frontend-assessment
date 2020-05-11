import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Home from '../Home';

describe('Home', () => {
  let wrapper;
  const fetchData = jest.fn();
  beforeEach(() => {
    wrapper = mount(<Home fetchData={fetchData} />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
});
