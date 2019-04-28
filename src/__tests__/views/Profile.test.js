import React from "react";
import { shallow } from "enzyme";
import ProfileView from "../../views/Profile";


const props = {
  user: {
    email: "aacryce@gmail.com",
    fullname: "AHEBWA CHRIS",
    imageUrl: "https://d3n32ilufxuvd1.cloudfront.net/56fd5ecfedf7a42502965830/716244/upload-57c882a0-fdc2-11e6-8942-e1606bea3fc0.png",
    is_admin: false,
    joined: "Sat, 20 Apr 2019 07:36:20 GMT",
    telephone_number: "0758939187",
    user_id: 10,
    username: "crycetrulytest",
  },
  parcels: [{
    parcel_id: 1,
    price: 8.03585461851507,
    quantity: 6,
    status: "order_placed",
    tripDistance: 2.35723641234338,
    weight: 6,
  },
  {
    parcel_id: 2,
    price: 8.03585461851507,
    quantity: 6,
    status: "order_placed",
    tripDistance: 2.35723641234338,
    weight: 6,
  },
  ],

};

describe("Profile View Tests", () => {
  const wrapper = shallow(<ProfileView {...props} />);
  it("should not regress", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
