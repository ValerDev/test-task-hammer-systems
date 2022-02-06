import React, {useEffect} from "react";
import {fetchClients} from "../../../../redux/requests/Clients";
import {connect} from "react-redux";
import Loading from "../../../../components/shared-components/Loading";
import {clientsAC} from "../../../../redux/actions/Clients";
import {Table} from "antd";
import { useHistory } from "react-router-dom";


const Clients = (props) => {
    const {clients} = props
    const history = useHistory();

    useEffect(async () => {
        await fetchClients(props.fetchClients)
    }, [])


    const dataSource = clients.length ? clients.map((e, i) => ({...e, key: ++i})) : [];

    const columns = clients.length ? Object.keys(clients[0]).map((e,i) => {
        return typeof clients[i][e] !=='object' ? {title: e.charAt(0).toUpperCase() + e.slice(1), dataIndex: e, key: e} : {}
    }) : []

    return (
        <Table fallback={<Loading cover="content"/>} dataSource={dataSource} columns={columns}  onRow={(record) => {
            return {
                onClick: () => {
                    history.push(`/app/main/client/${record.id}`)
                },
            };
        }}/>
    )
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients.clients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: clients => dispatch(clientsAC(clients))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)