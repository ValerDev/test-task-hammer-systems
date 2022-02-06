import {FETCH_CLIENTS, FETCH_CURRENT_CLIENT} from "redux/constants/Clients";

const initState = {
    clients: [],
    currentClient: {}
}

const Clients = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        case FETCH_CURRENT_CLIENT:{
            return {
                ...state,
                currentClient: action.payload
            }
        }
        default:
            return state
    }
}

export default Clients;