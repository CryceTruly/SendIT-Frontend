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



    it('logged in user fetch parcels', () => {
        let state;
        state = reducers({parcels:{parcels:[]},errors:{msg:null,status:null,id:null},auth:{user_id:'11',isAuthenticated:true,isLoading:false,user:{email:'aacryce@gmail.com',fullname:'Full name',is_admin:true,joined:false,telephone_number:'076454646474',user_id:11,username:'trulyy'}}}, {type:'GET_PARCELS',payload:[{destination_address:'Uganda',parcel_id:7,pickup_address:'Ntungamo - Katunguru Rd, Uganda',placed:'Tue, 26 Mar 2019 11:12:18 GMT',recipient_email:'Ntungamo - Katunguru Rd, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Bushenyi, Uganda',parcel_id:6,pickup_address:'Ishaka, Uganda',placed:'Tue, 26 Mar 2019 11:11:59 GMT',recipient_email:'Ishaka, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Bushenyi, Uganda',parcel_id:5,pickup_address:'Ishaka, Uganda',placed:'Tue, 26 Mar 2019 11:11:51 GMT',recipient_email:'Ishaka, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Bushenyi, Uganda',parcel_id:4,pickup_address:'Mbarara, Uganda',placed:'Tue, 26 Mar 2019 11:09:02 GMT',recipient_email:'Mbarara, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'University Rd, Kampala, Uganda',parcel_id:3,pickup_address:'Kireka, Kampala, Uganda',placed:'Tue, 26 Mar 2019 11:08:48 GMT',recipient_email:'Kireka, Kampala, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Kamwokya, Kampala, Uganda',parcel_id:2,pickup_address:'Mulago, Kampala, Uganda',placed:'Tue, 26 Mar 2019 11:08:32 GMT',recipient_email:'Mulago, Kampala, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Kamwokya, Kampala, Uganda',parcel_id:1,pickup_address:'Mulago, Kampala, Uganda',placed:'Tue, 26 Mar 2019 11:08:06 GMT',recipient_email:'Mulago, Kampala, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11}]});
        expect(state).toEqual({parcels:{parcels:[{destination_address:'Uganda',parcel_id:7,pickup_address:'Ntungamo - Katunguru Rd, Uganda',placed:'Tue, 26 Mar 2019 11:12:18 GMT',recipient_email:'Ntungamo - Katunguru Rd, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Bushenyi, Uganda',parcel_id:6,pickup_address:'Ishaka, Uganda',placed:'Tue, 26 Mar 2019 11:11:59 GMT',recipient_email:'Ishaka, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Bushenyi, Uganda',parcel_id:5,pickup_address:'Ishaka, Uganda',placed:'Tue, 26 Mar 2019 11:11:51 GMT',recipient_email:'Ishaka, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Bushenyi, Uganda',parcel_id:4,pickup_address:'Mbarara, Uganda',placed:'Tue, 26 Mar 2019 11:09:02 GMT',recipient_email:'Mbarara, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'University Rd, Kampala, Uganda',parcel_id:3,pickup_address:'Kireka, Kampala, Uganda',placed:'Tue, 26 Mar 2019 11:08:48 GMT',recipient_email:'Kireka, Kampala, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Kamwokya, Kampala, Uganda',parcel_id:2,pickup_address:'Mulago, Kampala, Uganda',placed:'Tue, 26 Mar 2019 11:08:32 GMT',recipient_email:'Mulago, Kampala, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11},{destination_address:'Kamwokya, Kampala, Uganda',parcel_id:1,pickup_address:'Mulago, Kampala, Uganda',placed:'Tue, 26 Mar 2019 11:08:06 GMT',recipient_email:'Mulago, Kampala, Uganda',recipient_phone_number:'0766765423',sender_email:'aacryce@gmail.com',status:'order_placed',user_id:11}]},errors:{msg:null,status:null,id:null},auth:{user_id:'11',isAuthenticated:true,isLoading:false,user:{email:'aacryce@gmail.com',fullname:'Full name',is_admin:true,joined:false,telephone_number:'076454646474',user_id:11,username:'trulyy'}}});
      });






});
