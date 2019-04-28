import React from "react";
import { shallow } from "enzyme";
import Login from "../../components/Login";
import Register from "../../components/Register";


it("renders without crashing", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
it("renders without crashing", () => {
  const wrapper = shallow(<Register />);
  expect(wrapper).toMatchSnapshot();
});
