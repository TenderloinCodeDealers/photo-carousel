import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageEntry from '../client/components/ImageEntry.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<ImagesList />', () => {
  const wrapper = shallow(
    <ImageEntry
      image={{
        _id: '5b933a655b7faa4d2a4e8dec',
        id: 22,
        image: 'https://s3-us-west-1.amazonaws.com/vourcher/restaurant+images/image-2.jpg',
        __v: 0
      }}
    />
  );
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
