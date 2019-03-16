import React from 'react';
import {
    shallow
} from 'enzyme';

// Components
import App from "../components/App";

function setup() {
    const wrapper = shallow( < App /> );
    return {
        wrapper
    };
}

describe('Welcome Test Suite', () => {
    it('Should have a paragraph', () => {
        const {
            wrapper
        } = setup();
        expect(wrapper.find('p').exists()).toBe(true);
    });
});
