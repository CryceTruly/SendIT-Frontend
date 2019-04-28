import React from "react";
import {
  shallow,mount
} from "enzyme";
import Provider from "react-redux"
import Navigationbar, { mapStateToProps } from "./Navbar";
import store from "../../Store";

describe("Nav TestSuite", () => {
  it("Should not regress", () => {
    const wrapper = shallow(<Navigationbar />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should map state to props", () => {
    const auth = {
      user_id: localStorage.getItem("user_id"),
      isAuthenticated: null,
      isLoading: false,
      user: null,
    };
    const appState = { auth };
    const componentState = mapStateToProps(appState);
    expect(componentState).toEqual(appState);
  });
});
