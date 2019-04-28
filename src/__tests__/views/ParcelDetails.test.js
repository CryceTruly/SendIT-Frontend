import React from "react";
import { shallow } from "enzyme";
import ParcelDetail from "../../views/ParcelDetails";


const props = {
  location: {
    state: {
      data: {
        addresses: {
          current: "Mbarara, Uganda",
          destination: "Mbarara, Uganda",
          pickup: "Mbarara, Uganda",
        },
        created: "Sun, 28 Apr 2019 15:39:10 GMT",
        last_modified: "Sun, 28 Apr 2019 15:39:10 GMT",
        latLngCodinates: {
          destination: {
            lat: -0.6066829,
            lng: 30.6756735,
          },
          pickup: {
            lat: -0.6071596,
            lng: 30.6545022,
          },
        },
        parcel_description: "This is the application",
        parcel_id: 42,
        recipient: {
          email: "mkyokusiima@gmail.com",
          fullname: "AHEBWA CHRIS",
          phone_number: "0773172299",
        },
        sender: {
          email: "aacryce@gmail.com",
          fullname: "AHEBWA CHRIS",
          imageUrl: "https://d3n32ilufxuvd1.cloudfront.net/56fd5ecfedf7a42502965830/716244/upload-57c882a0-fdc2-11e6-8942-e1606bea3fc0.png",
          is_admin: false,
          joined: "Sat, 20 Apr 2019 07:36:20 GMT",
          telephone_number: "0758939187",
          user_id: 10,
          username: "crycetrulytest",
        },
        stats: {
          price: 8.03585461851507,
          quantity: 6,
          status: "order_placed",
          tripDistance: 2.35723641234338,
          weight: 6,
        },

      },
    },
  },
};

describe("Parcel Detail View Tests", () => {
  const wrapper = shallow(<ParcelDetail {...props} />);
  it("should not regress", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
