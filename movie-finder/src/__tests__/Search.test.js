import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home /> with no props', () => {
  let container;
  let setQuery = jest.fn();
  beforeEach(() => {
    container = Enzyme.mount(<Home setQuery={setQuery} />);
  });

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a search field', () => {
    expect(container.find('#search').length).toEqual(1);
  });
});
