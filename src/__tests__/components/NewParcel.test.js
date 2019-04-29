
import React from "react";
import { shallow } from "enzyme";
import { NewOrder, mapStateToProps } from "../../components/NewOrder";

describe("registration tests", () => {
  const props = {
    errors: {
      id: 1, errorMessage: "hi", processing: true, msg: "",
    },
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    login: jest.fn(),
    parcels: {
      isAdding: false,

    },
    createParcel: jest.fn,
  };

  const wrapper = shallow(<NewOrder {...props} />);

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
  it("renders without crashing", () => {
    const wrapper = shallow(<NewOrder {...props} />);
    expect(wrapper).toMatchSnapshot();
  });


  it("should submit a form", () => {
    const e = {
      preventDefault: () => {
      },
      target: {
        password: "hey",
        value: "password",
        password_comfirm: "hey2",
        value: "password",
      },
    };
    wrapper.instance().onSubmit(e);
  });

  it("should submit a form  on match", () => {
    const e = {
      preventDefault: () => {
      },
      target: {
        password: "hey",
        value: "password",
        password_comfirm: "hey",
        value: "password",
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
