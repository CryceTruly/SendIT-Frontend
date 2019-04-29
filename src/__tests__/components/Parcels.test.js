import React from "react";
import { shallow } from "enzyme";
import { Parcels } from "../../components/Parcels";

describe("Parcels tests", () => {
  const props1 = {
    getParcels: jest.fn(),
    auth: {
      isAuthenticated: false,
      user: {
        is_admin: false,
      },
      user_id: localStorage.getItem("user_id"),
      isLoading: false,
    },
    parcels: [{
      id: 7,
    }],
  };
  it("should render parcels view", () => {
    const wrapper = shallow(<Parcels {...props1} />);
    expect(wrapper).toMatchSnapshot();
  });
});
