import React from "react";
import { shallow } from "enzyme";
import {Profile, mapStateToProps } from "../components/Profile";

describe("Profile component", () => {
  const props={
    auth:{
      user:{
"username":"hello"
      },
      isLoading:false
    }
  }
  it("should display user details", async () => {
    const wrapper = shallow(<Profile {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show loading of a user", async () => {
    const props1={
      auth:{
        user:{
  "username":"hello"
        },
        isLoading:true
      }
    }
    const wrapper = shallow(<Profile {...props1}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should  map parcel state to props", () => {
    const parcels = [
      {
        destination_address: "Uganda",
        parcel_id: 7,
        pickup_address: "Ntungamo - Katunguru Rd, Uganda",
        placed: "Tue, 26 Mar 2019 11:12:18 GMT",
        recipient_email: "Ntungamo - Katunguru Rd, Uganda",
        recipient_phone_number: "0766765423",
        sender_email: "aacryce@gmail.com",
        status: "order_placed",
        user_id: 11,
      },
    ];
    const appState = { parcels };
    const componentState = mapStateToProps({ parcels: appState });
    expect(componentState).toEqual(appState);
  });
});
