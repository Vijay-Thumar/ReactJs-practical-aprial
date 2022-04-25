import {createStore} from 'redux';

const state = {
    users: []
}

const userReducer = (state = {users: []} , action) =>{
    if (action.type === 'storeuser')
    {
        return {
            users: action.payload,
        }
    }

    return state;
}


const store = createStore(userReducer);

export default  store;
