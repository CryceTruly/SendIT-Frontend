import React from "react";
import { shallow } from "enzyme";
import PrivateRoute from "../../../components/common/PrivateRoute";


it("renders without crashing", () => {
  const wrapper = shallow(<PrivateRoute />);
  expect(wrapper).toMatchSnapshot();
});
