import React, {useEffect} from "react";
import {fetchClients} from "../../../../redux/requests/Clients";
import { useSelector, useDispatch } from 'react-redux'
import Loading from "../../../../components/shared-components/Loading";
import {clientsAC} from "../../../../redux/actions/Clients";
import {Table} from "antd";
import {useHistory} from "react-router-dom";


const Clients = (props) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const {clients} = useSelector(state => state.clients)

    useEffect(() => {
        (async () => {
            const {data} = await fetchClients()
            dispatch(clientsAC(data))
        })()
        return () => dispatch(clientsAC([]))
    }, [dispatch])


    const dataSource = clients.length ? clients.map((e, i) => ({...e, key: ++i})) : [];

    const columns = clients.length ? Object.keys(clients[0]).map((e, i) => {
        return typeof clients[i][e] !== 'object' ? {
            title: e.charAt(0).toUpperCase() + e.slice(1),
            dataIndex: e,
            key: e
        } : {}
    }) : []

    return (
        <Table fallback={<Loading cover="content"/>} dataSource={dataSource} columns={columns} onRow={(record) => {
            return {
                onClick: () => {
                    history.push(`/app/main/client/${record.id}`)
                },
            };
        }}/>
    )
}


export default Clients;