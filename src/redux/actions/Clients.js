import {FETCH_CLIENTS, FETCH_CURRENT_CLIENT} from "redux/constants/Clients";

export function clientsAC(clients) {
    return {
        type: FETCH_CLIENTS,
        payload: clients,
    };
}

export function currentClientAC(client) {
    return {
        type: FETCH_CURRENT_CLIENT,
        payload: client,
    };
}