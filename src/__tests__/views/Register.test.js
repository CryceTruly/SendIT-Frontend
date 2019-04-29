import React from "react";
import { shallow } from "enzyme";
import Register from "../../views/Register";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  errorId: 1,
  errorMessage: "Invalid password",
  processing: true,
  msg: "Logged In success",
};

describe("Register View Tests", () => {
  const wrapper = shallow(<Register {...props} />);
  it("should not regress", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
