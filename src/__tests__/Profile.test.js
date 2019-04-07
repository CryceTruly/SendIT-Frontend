import React from 'react';
import {shallow} from 'enzyme';
import Profile from '../components/Profile'
import {mapStateToProps} from '../components/Profile'
describe(`Profile component`,()=>{
    it('should display user details',async ()=>{
        const wrapper = shallow(<Profile />);
        expect(wrapper).toMatchSnapshot()


    })


    it(`should  map parcel state to props`,()=>{
        const parcels=[
            {
                destination_address: "Uganda",
                parcel_id: 7,
                pickup_address: "Ntungamo - Katunguru Rd, Uganda",
                placed: "Tue, 26 Mar 2019 11:12:18 GMT",
                recipient_email: "Ntungamo - Katunguru Rd, Uganda",
                recipient_phone_number: "0766765423",
                sender_email: "aacryce@gmail.com",
                status: "order_placed",
                user_id: 11
            }
        ]
    const appState={"parcels":parcels}
    const componentState=mapStateToProps({"parcels":appState});
    expect(componentState).toEqual(appState)


    });
})