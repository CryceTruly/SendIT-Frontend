import React from "react";
import {
  shallow, mount,
} from "enzyme";
import Provider from "react-redux";
import { Navigationbar, mapStateToProps } from "./Navbar";
import store from "../../Store";

describe("Nav TestSuite", () => {
  const props = {
    auth: {
      isAuthenticated: true,
      user: {
        email: "crycetruly@gmail.com",
        username: "fredgreg",
      },
    },
    logout: jest.fn(),
  };

  it("Should not regress", () => {
    const wrapper = shallow(<Navigationbar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle user logout", () => {
    const wrapper = shallow(<Navigationbar {...props} />);
    wrapper.instance().onLogoutClick();
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
