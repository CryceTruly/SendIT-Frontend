import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import {
  getParcels, getParcel, createParcel,
} from "../../actions/parcelActions";

import {
  GET_PARCEL,
} from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("parcels actions tests", () => {
  const props = {
    history: {
      push: jest.fn(),

    },
  };
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });


  it("Should fetch parcels", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          parcels: [],
        },
      });
    });
    const expectedActions = [{ payload: [], type: "GET_PARCELS" }];
    return store.dispatch(getParcels()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it("Should fetch a parcels", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          parcel: {
            id: 1,
          },
        },
      });
    });
    const expectedActions = [{ payload: { id: 1 }, type: "GET_PARCEL" }];
    return store.dispatch(getParcel(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it("Should add A parcel successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 201,
        response: {


        },
      });
    });
    const expectedActions = [{ type: "ADDING_PARCEL" }, { payload: {}, type: "ADD_PARCEL_SUCCESS" }];


    const parcelData = {
      pickup_address: "aacryce@gmaAil.com",
      destination_address: "passwordd",
      recipient_email: "testusername",
      recipient_phone_number: "07567875855",
      weight: 1,
      quantity: 2,
    };
    return store.dispatch(createParcel(parcelData, props)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
