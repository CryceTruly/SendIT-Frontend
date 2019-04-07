import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers({parcels:{parcels:[]},errors:{msg:null,status:null,id:null},auth:{auth_token:null,user_id:null,isAuthenticated:null,isLoading:false,user:null,username:null}}, {type:'USER_LOADING'});
  expect(state).toEqual({parcels:{parcels:[]},errors:{msg:null,status:null,id:null},auth:{auth_token:null,user_id:null,isAuthenticated:null,isLoading:true,user:null,username:null}});
});
