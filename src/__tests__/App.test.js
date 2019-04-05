import React from "react";
import {
    shallow
} from "enzyme";
import reducers from "../reducers";
// Components
import App from "../components/App";
import {
    Parcels
} from "../components/Parcels";

function setup() {
    const wrapper = shallow( <App /> );
    return {
        wrapper
    };
}

describe("Welcome Test Suite", () => {
    it("Should have a paragraph", () => {
        const {
            wrapper
        } = setup();
        expect(wrapper.find("p").exists()).toBe(true);
    });



    test("reducers", () => {
        let state;
        state = reducers({
            parcels: {
                parcels: []
            },
            errors: {
                msg: {},
                status: null,
                id: null
            },
            auth: {
                token: null,
                isAuthenticated: null,
                isLoading: false,
                user: null
            }
        }, {
            type: "GET_PARCELS",
            payload: [{
                destination_address: "Uganda",
                parcel_id: 7,
                pickup_address: "Ntungamo - Katunguru Rd, Uganda",
                placed: "Tue, 26 Mar 2019 11:12:18 GMT",
                recipient_email: "Ntungamo - Katunguru Rd, Uganda",
                recipient_phone_number: "0766765423",
                sender_email: "aacryce@gmail.com",
                status: "order_placed",
                user_id: 11
            }]
        });
        expect(state).toEqual({
            parcels: {
                parcels: [{
                    destination_address: "Uganda",
                    parcel_id: 7,
                    pickup_address: "Ntungamo - Katunguru Rd, Uganda",
                    placed: "Tue, 26 Mar 2019 11:12:18 GMT",
                    recipient_email: "Ntungamo - Katunguru Rd, Uganda",
                    recipient_phone_number: "0766765423",
                    sender_email: "aacryce@gmail.com",
                    status: "order_placed",
                    user_id: 11
                }]
            },
            errors: {
                msg: {},
                status: null,
                id: null
            },
            auth: {
                token: null,
                isAuthenticated: null,
                isLoading: false,
                user: null
            }
        });
    });

});
