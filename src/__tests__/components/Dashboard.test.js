import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../../components/Dashboard";
import DashboardView from "../../components/DashboardView";


it("renders without crashing", () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});
it("renders without crashing", () => {
  const wrapper = shallow(<DashboardView />);
  expect(wrapper).toMatchSnapshot();
});
