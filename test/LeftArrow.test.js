import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LeftArrow from '../client/components/LeftArrow.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<LeftArrow />', () => {
  const wrapper = shallow(<LeftArrow />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
