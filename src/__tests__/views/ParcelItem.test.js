import React from "react";
import { shallow } from "enzyme";
import ParcelItem from "../../views/ParcelItem";


const props = {
  data:{
  created: "Sun, 28 Apr 2019 15:39:10 GMT",
  parcel_id: 42,
  stats: {
    price: 8.03585461851507,
    quantity: 6,
    status: "order_placed",
    tripDistance: 2.35723641234338,
    weight: 6,
  },
}
};

describe("Parcel Item View Tests", () => {
  const wrapper = shallow(<ParcelItem {...props} />);
  it("should not regress", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
