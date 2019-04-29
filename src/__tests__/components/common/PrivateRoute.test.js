import React from "react";
import { shallow } from "enzyme";
import { PrivateRoute, mapStateToProps } from "../../../components/common/PrivateRoute";
import { Parcels } from "../../../components/Parcels";

it("renders without crashing", () => {
  const props = {

  };
  const wrapper = shallow(
    <PrivateRoute
      {...props}
      exact
      path="/"
      component={Parcels}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

it("should map state to props", () => {
  const authState = {
    isAuthenticated: false,
    user: [],
    user_id: localStorage.getItem("user_id"),
    isLoading: false,
  };

  const appState = [authState];

  expect(mapStateToProps(appState)).toBeDefined();
});
