import React from "react";
import {
    shallow
} from "enzyme";
// Components
import Navigationbar from "./Navbar";
function setup() {
    const wrapper = shallow( <Navigationbar /> );
    return {
        wrapper
    };
}

describe("Nav TestSuite", () => {
    it("Should have not a paragraph", () => {
        const {
            wrapper
        } = setup();
        expect(wrapper).toMatchSnapshot()
    });

}
)
