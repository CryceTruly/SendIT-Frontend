import React from "react";
import { shallow } from "enzyme";
import NewParcel from "../../views/NewParcel";

const props = {
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  errorId: 1,
  errorMessage: "Invalid password",
  isAdding: true,
};

describe("New Parcel View Tests", () => {
  const wrapper = shallow(<NewParcel {...props} />);
  it("should not regress", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
