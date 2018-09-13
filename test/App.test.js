import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';
import ImagesList from '../client/components/ImagesList.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('should contain an ImagesList component', () => {
    expect(wrapper.find(ImagesList).exists()).toEqual(true);
  });
});
