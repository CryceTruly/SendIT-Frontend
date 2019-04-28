import React from "react";
import { shallow } from "enzyme";
import Spinner from "../../views/Spinner";

describe("Spinner tests", () => {
  it("should not regress", () => {
    const componentWrapper = shallow(<Spinner />);
    expect(componentWrapper).toMatchSnapshot();
  });
});
