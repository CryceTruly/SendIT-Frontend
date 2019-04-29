import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../views/Navbar";

const props = {
  isAuthenticated: true,
  user: {

  },
  onLogoutClick: jest.fn(),
};

describe("Navbar View Tests", () => {
  const wrapper = shallow(<Navbar {...props} />);
  it("should not regress", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
