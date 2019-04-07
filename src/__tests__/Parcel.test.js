import React from 'react';
import { shallow } from 'enzyme';
import Parcels from '../components/Parcels'
let wrapper;
import PrivateRoute from '../components/common/PrivateRoute'
beforeEach(() => {
  wrapper = shallow(<PrivateRoute component={Parcels} />);
});
describe('Profile Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});