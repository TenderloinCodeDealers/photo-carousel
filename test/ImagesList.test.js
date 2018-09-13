import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImagesList from '../client/components/ImagesList.jsx';
import ImageEntry from '../client/components/ImageEntry.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<ImagesList />', () => {
  const wrapper = shallow(<ImagesList />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should contain at least one ImageEntry component', () => {
    expect(wrapper.find(ImageEntry).exists()).toEqual(true);
  });
});
