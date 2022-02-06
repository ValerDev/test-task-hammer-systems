import axios from 'axios';


export const fetchClients = async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

export const fetchCurrentClient = id => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}


