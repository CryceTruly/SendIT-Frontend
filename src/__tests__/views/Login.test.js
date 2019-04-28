import React from "react";
import { shallow } from "enzyme";
import LoginView from "../../views/Login";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  errorId: 1,
  errorMessage: "Invalid password",
  processing: true,
  msg: "Logged In success",
};

describe("Login View Tests", () => {
  const wrapper = shallow(<LoginView {...props} />);
  it("should not regress", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
