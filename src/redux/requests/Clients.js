import axios from 'axios';
import {FETCH_CURRENT_CLIENT} from "../constants/Clients";

export const fetchClients = async dispatch => {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(data)
        return true
    } catch (e) {
        console.error('something went wrong while fetching clients: ', e);
    }
}

export const fetchCurrentClient = async (dispatch, id) => {
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch(data)
        return true
    } catch (e) {
        console.error('something went wrong while fetching current client: ', e);
    }
}
