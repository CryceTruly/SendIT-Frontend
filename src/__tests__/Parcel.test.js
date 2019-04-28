import { shallow } from "enzyme";
import React from "react";
import Parcels, { mapStateToProps } from "../components/Parcels";

describe("Parcels component", () => {
  describe("The container element", () => {
    describe("map state to props", () => {
      it("should map state to props correctly", () => {
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
  });
  it("should not regress", () => {
    const wrapper = shallow(<Parcels />);
    expect(wrapper).toMatchSnapshot();
  });
});
