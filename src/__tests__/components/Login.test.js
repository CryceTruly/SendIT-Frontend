import React from "react";
import { shallow } from "enzyme";
import { Login, mapStateToProps } from "../../components/Login";

describe("login tests", () => {
  const props = {
    error: {
      errorId: 1, errorMessage: "hi", processing: true, msg: "",
    },
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    login: jest.fn(),
  };

  const wrapper = shallow(<Login {...props} />);

  it("renders without crashing", () => {
    const e = {
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrapper.instance().onChange(e);
    expect(wrapper.instance().state.hey).toEqual("How are you");
    expect(wrapper).toMatchSnapshot();
  });

  it("should submit a form", () => {
    const e = {
      preventDefault: () => {
      },
      target: {
        name: "hey", value: "How are you",
      },
    };
    wrapper.instance().onSubmit(e);
  });

  it("should map state to props", () => {
    const auth = {
      auth: {
        isAuthenticated: false,
        user: [],
        user_id: localStorage.getItem("user_id"),
        isLoading: false,
      },
    };

    const appState = auth;
    expect(mapStateToProps(appState)).toBeDefined();
  });
});
