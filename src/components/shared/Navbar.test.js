import React from "react";
import {
    shallow
} from "enzyme";
// Components
import Navigationbar from "./Navbar";
import {mapStateToProps} from './Navbar'
function setup() {
    const wrapper = shallow( <Navigationbar /> );
    return {
        wrapper
    };
}

describe("Nav TestSuite", () => {
    it("Should not regress", () => {
        const {
            wrapper
        } = setup();
        expect(wrapper).toMatchSnapshot()
    });

    test('should map state to props', () => {
            const auth=
                {
                    user_id:localStorage.getItem("user_id"),
                    isAuthenticated: null,
                    isLoading: false,
                    user:null
                }
        const appState={auth}
        const componentState=mapStateToProps(appState);
        expect(componentState).toEqual(appState)
    })


}
)
