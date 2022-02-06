import React, {useEffect, useState} from "react";
import {fetchCurrentClient} from "../../../../redux/requests/Clients";
import {currentClientAC} from "../../../../redux/actions/Clients";
import { useSelector, useDispatch } from 'react-redux'

import Loading from "../../../../components/shared-components/Loading";
import {Form, Avatar, Button, Input, Row, Col, message} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import {useHistory} from "react-router-dom";

const Profile = (props) => {
    const history = useHistory()
    const {match: {params: {id}}} = props
    const [state, setState] = useState('')
    const dispatch = useDispatch()
    const avatarUrl = 'data:image/jpeg;base64,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'
    const {currentClient} = useSelector(state => state.clients)

    useEffect(() => {
        (async () => {
            const {data} = await fetchCurrentClient(id)
            dispatch(currentClientAC(data))
        })()
        return () => {
            dispatch(currentClientAC({}))
        }
    }, [dispatch, id])


    const onFinish = () => {
        const key = 'updatable';
        message.loading({content: 'Updating...', key});
        setTimeout(() => {
            setState(state)
            message.success({content: 'Done!', key, duration: 2});
            history.push('/app/main/clients/list');
        }, 1000)
    }

    return Object.keys(currentClient).length ?
        <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                <Avatar size={90} src={avatarUrl} icon={<UserOutlined/>}/>
                <div className="ml-md-3 mt-md-0 mt-3">
                </div>
            </Flex>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={
                        {
                            'firstName': currentClient?.name.split(' ')[0],
                            'lastName': currentClient?.name.split(' ')[1],
                            'email': currentClient?.email,
                            'username': currentClient?.username,
                            'phoneNumber': currentClient?.phone,
                            'website': currentClient?.website,
                            'address': currentClient?.address?.street,
                            'city': currentClient?.address?.city,
                            'zipcode': currentClient?.address?.zipcode,
                            'suite': currentClient?.address?.suite,
                            'street': currentClient?.address?.street,
                        }
                    }
                    onFinish={onFinish}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="First name"
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, firstName: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Last name"
                                        name="lastName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, lastName: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, email: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, username: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phoneNumber"
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, phone: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, website: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, city: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Street"
                                        name="street"
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, street: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Suite"
                                        name="suite"
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, suite: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Zipcode"
                                        name="zipcode"
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setState(prevState => ({...prevState, zipcode: e.target.value}))
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </> : <Loading cover="content"/>
}


export default Profile;

