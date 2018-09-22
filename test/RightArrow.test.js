import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RightArrow from '../client/components/RightArrow.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<RightArrow />', () => {
  const wrapper = shallow(<RightArrow />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
