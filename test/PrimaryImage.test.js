import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PrimaryImage from '../client/components/PrimaryImage.jsx';

Enzyme.configure({ adapter: new Adapter() });
const exampleImage = {
  _id: '5b9b29456e90510457754556',
  id: 22,
  image: 'https://s3-us-west-1.amazonaws.com/vourcher/food+images/image-18.jpg',
  __v: 0
};

describe('<PrimaryImage />', () => {
  const wrapper = shallow(<PrimaryImage image={exampleImage} />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
